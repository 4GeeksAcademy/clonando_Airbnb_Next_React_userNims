"use client";

export type PriceOrder = "price-asc" | "price-desc";

interface ResultsToolbarProps {
  count: number;
  order: PriceOrder;
  onOrderChange: (order: PriceOrder) => void;
}

export const ResultsToolbar = ({
  count,
  order,
  onOrderChange,
}: ResultsToolbarProps) => (
  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <p role="status" className="font-semibold">
      {count} {count === 1 ? "alojamiento" : "alojamientos"}
    </p>
    <label className="flex flex-col gap-2 text-sm font-medium">
      Ordenar por precio
      <select
        value={order}
        onChange={(event) => {
          const value = event.target.value;
          if (value === "price-asc" || value === "price-desc") {
            onOrderChange(value);
          }
        }}
        className="min-h-11 rounded-xl border border-zinc-300 bg-white px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
      >
        <option value="price-asc">Precio: menor a mayor</option>
        <option value="price-desc">Precio: mayor a menor</option>
      </select>
    </label>
  </div>
);
