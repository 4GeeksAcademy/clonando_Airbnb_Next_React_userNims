import { ListingRating } from "@/components/ListingRating";
import type { Listing } from "@/types/listing";

interface RoomHeaderProps {
  room: Listing;
}

export const RoomHeader = ({ room }: RoomHeaderProps) => (
  <header className="space-y-3">
    <h1 className="text-3xl font-bold tracking-tight">{room.name}</h1>
    <ListingRating rating={room.rating} reviewCount={room.reviewCount} />
    <p className="text-zinc-600">{room.location}</p>
    <p className="text-sm text-zinc-600">
      Hasta {room.guests} huéspedes · {room.bedrooms} dormitorios · {room.beds} camas · {room.bathrooms} baños
    </p>
  </header>
);
