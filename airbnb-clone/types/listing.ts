export interface Host {
  name: string;
  avatarSrc: string;
  avatarAlt: string;
  yearsHosting: number;
}

export interface Amenity {
  id: string;
  name: string;
}

export interface Listing {
  id: string;
  name: string;
  location: string;
  description: string;
  category: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  images: readonly [string, ...string[]];
  host: Host;
  amenities: readonly Amenity[];
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}
