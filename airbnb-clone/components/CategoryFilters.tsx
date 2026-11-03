"use client";

interface CategoryFiltersProps {
  categories: readonly string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export const CategoryFilters = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFiltersProps) => (
  <div role="group" aria-label="Filtrar por categoría" className="flex gap-3 overflow-x-auto pb-2">
    {[null, ...categories].map((category) => (
      <button
        key={category ?? "all"}
        type="button"
        aria-pressed={activeCategory === category}
        onClick={() => onCategoryChange(category)}
        className={`min-h-11 shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 ${
          activeCategory === category
            ? "border-rose-600 bg-rose-600 text-white"
            : "border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
        }`}
      >
        {category ?? "Todas"}
      </button>
    ))}
  </div>
);
