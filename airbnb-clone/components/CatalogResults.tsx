"use client";

import { useState } from "react";
import { ListingGrid } from "@/components/ListingGrid";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { ResultsToolbar, type PriceOrder } from "@/components/ResultsToolbar";
import type { Listing } from "@/types/listing";

interface CatalogResultsProps {
  listings: readonly Listing[];
}

export const CatalogResults = ({ listings }: CatalogResultsProps) => {
  const [order, setOrder] = useState<PriceOrder>("price-asc");
  const sortedListings = [...listings].sort((a, b) =>
    order === "price-asc"
      ? a.pricePerNight - b.pricePerNight
      : b.pricePerNight - a.pricePerNight,
  );

  return (
    <section aria-label="Resultados del catálogo" className="space-y-6">
      <ResultsToolbar count={listings.length} order={order} onOrderChange={setOrder} />
      <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          {sortedListings.length > 0
            ? <ListingGrid listings={sortedListings} />
            : <p>No hay alojamientos disponibles.</p>}
        </div>
        <MapPlaceholder />
      </div>
    </section>
  );
};
