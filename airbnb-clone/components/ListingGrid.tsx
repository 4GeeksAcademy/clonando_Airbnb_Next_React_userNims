import { ListingCard } from "@/components/ListingCard";
import type { Listing } from "@/types/listing";

interface ListingGridProps {
  listings: readonly Listing[];
}

export const ListingGrid = ({ listings }: ListingGridProps) => (
  <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {listings.map((listing) => (
      <li key={listing.id} className="min-w-0">
        <ListingCard listing={listing} />
      </li>
    ))}
  </ul>
);
