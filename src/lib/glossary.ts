import type { GlossaryItem, GlossaryCategory } from "../types";

/**
 * Filters glossary items by search query and category.
 *
 * @param items - Array of glossary items to filter
 * @param searchQuery - Search string matched case-insensitively against term and definition
 * @param selectedCategory - Category filter ("All" or specific category name)
 * @returns Array of matching glossary items
 */
export function filterGlossaryItems(
  items: GlossaryItem[],
  searchQuery: string = "",
  selectedCategory: GlossaryCategory | string = "All"
): GlossaryItem[] {
  if (!Array.isArray(items)) {
    return [];
  }

  const query = (searchQuery || "").trim().toLowerCase();

  return items.filter((item) => {
    if (!item) return false;

    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesQuery =
      !query ||
      (typeof item.term === "string" &&
        item.term.toLowerCase().includes(query)) ||
      (typeof item.definition === "string" &&
        item.definition.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });
}
