import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// Helper to load and transpile TSX component using project references
function loadTsxComponent(relativePath) {
  const fullPath = path.resolve(process.cwd(), relativePath);
  const source = fs.readFileSync(fullPath, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.React,
      esModuleInterop: true,
    },
  });

  const moduleExports = {};
  const customModule = { exports: moduleExports };
  const customRequire = (id) => {
    if (id === 'react') return React;
    return {};
  };

  const fn = new Function('require', 'exports', 'module', 'React', transpiled.outputText);
  fn(customRequire, moduleExports, customModule, React);

  return customModule.exports.InfoCard || customModule.exports.default;
}

const InfoCard = loadTsxComponent('src/components/InfoCard.tsx');

describe('InfoCard Component Tests', () => {
  it('Case 1: The card renders the supplied title', () => {
    const html = renderToStaticMarkup(
      React.createElement(InfoCard, { title: 'Voter Registration Guide' })
    );

    assert.ok(html.includes('Voter Registration Guide'), 'Should render the provided title');
    assert.ok(html.includes('<h3 class="info-card-title">Voter Registration Guide</h3>'), 'Title should be within h3 with appropriate class');
  });

  it('Case 2: The card renders the supplied description and children content', () => {
    const descriptionText = 'Learn the step-by-step process of casting a ballot.';
    const childText = 'Additional nested guidance content';

    const htmlWithDescription = renderToStaticMarkup(
      React.createElement(InfoCard, {
        title: 'Voting Overview',
        description: descriptionText,
      })
    );
    assert.ok(htmlWithDescription.includes(descriptionText), 'Should render description text');
    assert.ok(htmlWithDescription.includes('<p class="info-card-description">'), 'Description should be within p tag');

    const htmlWithChildren = renderToStaticMarkup(
      React.createElement(
        InfoCard,
        { title: 'Children Test' },
        React.createElement('span', { className: 'custom-child' }, childText)
      )
    );
    assert.ok(htmlWithChildren.includes(childText), 'Should render children elements');
    assert.ok(htmlWithChildren.includes('<span class="custom-child">'), 'Child element should retain its markup');
  });

  it('Case 3: The card uses appropriate semantic HTML structure', () => {
    const html = renderToStaticMarkup(
      React.createElement(InfoCard, {
        title: 'Semantic Test',
        description: 'Semantic Description',
        className: 'extra-custom-class',
      })
    );

    assert.ok(html.startsWith('<div class="info-card extra-custom-class">'), 'Root element should be a div with info-card class');
    assert.ok(html.includes('<h3 class="info-card-title">Semantic Test</h3>'), 'Uses heading h3 for title');
    assert.ok(html.includes('<p class="info-card-description">Semantic Description</p>'), 'Uses paragraph p for description');
  });

  it('Case 4: The card renders optional visual/icon and badge elements when provided', () => {
    const iconContent = '🔗️';
    const badgeText = 'Essential Step';

    // Test with icon
    const htmlWithIcon = renderToStaticMarkup(
      React.createElement(InfoCard, {
        title: 'Icon Card',
        icon: React.createElement('span', { className: 'icon-symbol' }, iconContent),
      })
    );
    assert.ok(htmlWithIcon.includes('<div class="info-card-icon" aria-hidden="true">'), 'Icon wrapper has aria-hidden="true"');
    assert.ok(htmlWithIcon.includes('<span class="icon-symbol">' + iconContent + '</span>'), 'Icon content is rendered inside the icon wrapper');

    // Test with badge
    const htmlWithBadge = renderToStaticMarkup(
      React.createElement(InfoCard, {
        title: 'Badge Card',
        badge: React.createElement('span', { className: 'badge-pill' }, badgeText),
      })
    );
    assert.ok(htmlWithBadge.includes('<div class="info-card-badge-wrapper">'), 'Badge wrapper is rendered');
    assert.ok(htmlWithBadge.includes(badgeText), 'Badge text is rendered');

    // Test without icon and badge
    const htmlPlain = renderToStaticMarkup(
      React.createElement(InfoCard, { title: 'Plain Card' })
    );
    assert.ok(!htmlPlain.includes('info-card-icon'), 'Icon wrapper is not rendered when icon prop is omitted');
    assert.ok(!htmlPlain.includes('info-card-badge-wrapper'), 'Badge wrapper is not rendered when badge prop is omitted');
  });
});
