"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Amenities } from "@/components/Amenities";
import { BookingCard } from "@/components/BookingCard";
import { HostInfo } from "@/components/HostInfo";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RoomHeader } from "@/components/RoomHeader";
import { listings } from "@/data/listings";
import type { Listing } from "@/types/listing";

interface RoomDetailsProps {
  id: string;
}

type RoomState =
  | { status: "loading" }
  | { status: "found"; room: Listing }
  | { status: "not-found" };

export const RoomDetails = ({ id }: RoomDetailsProps) => {
  const [state, setState] = useState<RoomState>({ status: "loading" });

  useEffect(() => {
    const timer = setTimeout(() => {
      const room = listings.find((listing) => listing.id === id);
      setState(room ? { status: "found", room } : { status: "not-found" });
    }, 1000);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <main className="mx-auto w-full max-w-[1200px] space-y-6 px-4 py-6 md:px-6">
      <Link href="/catalog" className="inline-flex min-h-11 items-center font-semibold text-rose-600 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-rose-600">
        Volver al catálogo
      </Link>
      {state.status === "loading" && (
        <p role="status">Cargando alojamiento…</p>
      )}
      {state.status === "not-found" && (
        <section role="status" className="space-y-2">
          <h1 className="text-3xl font-bold">Alojamiento no encontrado</h1>
          <p>No existe un alojamiento con este identificador. Regresa al catálogo.</p>
        </section>
      )}
      {state.status === "found" && (
        <>
          <PhotoGallery images={state.room.images} title={state.room.name} />
          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="min-w-0 space-y-6">
              <RoomHeader room={state.room} />
              <p className="leading-relaxed text-zinc-600">{state.room.description}</p>
              <HostInfo host={state.room.host} />
              <Amenities amenities={state.room.amenities} />
            </div>
            <BookingCard pricePerNight={state.room.pricePerNight} maxGuests={state.room.guests} />
          </div>
        </>
      )}
    </main>
  );
};
