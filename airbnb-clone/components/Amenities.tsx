import type { Amenity } from "@/types/listing";

interface AmenitiesProps {
  amenities: readonly Amenity[];
}

const iconPaths: Record<string, string> = {
  wifi: "M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8 16a6 6 0 0 1 8 0M12 20h.01",
  kitchen: "M4 3v5a3 3 0 0 0 6 0V3M7 3v18M19 3v18M19 3c-5 0-5 9 0 9",
  "air-conditioning": "M12 2v20M3 7l18 10M3 17 21 7M9 4l3 3 3-3M9 20l3-3 3 3",
  parking: "M5 21V3h8a5 5 0 0 1 0 10H5",
  heating: "M8 21c-4-4 2-5 0-9M12 21c-4-4 2-5 0-9M16 21c-4-4 2-5 0-9M5 5h14",
  terrace: "M3 11 12 3l9 8H3M12 11v10M7 21h10",
};

export const Amenities = ({ amenities }: AmenitiesProps) => (
  <section aria-label="Servicios" className="space-y-4">
    <h2 className="text-xl font-semibold">Servicios incluidos</h2>
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {amenities.map((amenity) => (
        <li key={amenity.id} className="flex items-center gap-3">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 fill-none stroke-current" strokeWidth="1.5">
            <path d={iconPaths[amenity.id] ?? "m5 12 4 4L19 6"} />
          </svg>
          <span>{amenity.name}</span>
        </li>
      ))}
    </ul>
  </section>
);
