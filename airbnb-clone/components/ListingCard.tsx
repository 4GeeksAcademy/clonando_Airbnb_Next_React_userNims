import Image from "next/image";
import Link from "next/link";
import { ListingRating } from "@/components/ListingRating";
import { priceFormatter } from "@/lib/price";
import type { Listing } from "@/types/listing";

interface ListingCardProps {
  listing: Listing;
}

export const ListingCard = ({ listing }: ListingCardProps) => (
  <article className="h-full">
    <Link
      href={`/rooms/${listing.id}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-600"
    >
      <Image
        src={listing.images[0]}
        alt={`Imagen placeholder de ${listing.name}`}
        width={800}
        height={600}
        className="aspect-[4/3] w-full rounded-2xl bg-zinc-100 object-cover"
      />
      <div className="space-y-1 pt-3">
        <h3 className="font-semibold group-hover:underline">{listing.name}</h3>
        <p className="text-sm text-zinc-600">{listing.location}</p>
        <p className="text-sm">
          <span className="font-semibold">{priceFormatter.format(listing.pricePerNight)}</span>
          {" por noche"}
        </p>
        <ListingRating rating={listing.rating} reviewCount={listing.reviewCount} />
      </div>
    </Link>
  </article>
);
