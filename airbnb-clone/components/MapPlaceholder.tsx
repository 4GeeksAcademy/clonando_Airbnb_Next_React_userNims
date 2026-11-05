import { priceFormatter } from "@/lib/price";
import type { Listing } from "@/types/listing";

interface MapPlaceholderProps {
  listings: readonly Listing[];
}

// Posiciones decorativas: los datos ficticios no tienen coordenadas.
const pinPositions = [
  "left-[18%] top-[22%]",
  "left-[62%] top-[30%]",
  "left-[30%] top-[62%]",
  "left-[70%] top-[72%]",
];

export const MapPlaceholder = ({ listings }: MapPlaceholderProps) => (
  <aside
    aria-label="Mapa ilustrativo, sin interacción"
    className="relative h-60 min-w-0 overflow-hidden rounded-2xl border border-zinc-300 bg-emerald-50 md:h-[480px]"
  >
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute -left-10 top-[45%] h-10 w-[140%] -rotate-12 bg-sky-200" />
      <div className="absolute left-[8%] top-[8%] h-20 w-24 rounded-full bg-emerald-200" />
      <div className="absolute bottom-[6%] right-[6%] h-24 w-28 rounded-full bg-emerald-200" />
      <div className="absolute inset-y-0 left-1/2 w-2 bg-white" />
      <div className="absolute inset-x-0 top-1/4 h-2 bg-white" />
      <div className="absolute inset-x-0 top-3/4 h-1.5 bg-white" />
      <div className="absolute inset-y-0 left-[20%] w-1.5 bg-white" />
    </div>
    <ul className="absolute inset-0">
      {listings.slice(0, pinPositions.length).map((listing, index) => (
        <li
          key={listing.id}
          className={`absolute ${pinPositions[index]} rounded-full bg-white px-3 py-1 text-xs font-semibold shadow-md ring-1 ring-zinc-300`}
        >
          <span className="sr-only">{listing.name}: </span>
          {priceFormatter.format(listing.pricePerNight)}
        </li>
      ))}
    </ul>
    <p className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-1 text-xs text-zinc-600">
      Mapa ilustrativo, no real
    </p>
  </aside>
);
