"use client";

import { useState } from "react";
import { priceFormatter } from "@/lib/price";

interface BookingCardProps {
  pricePerNight: number;
  maxGuests: number;
}

export const BookingCard = ({ pricePerNight, maxGuests }: BookingCardProps) => {
  const [guests, setGuests] = useState(1);

  return (
    <aside aria-label="Reserva de demostración" className="min-w-0 space-y-5 rounded-2xl border border-zinc-200 p-4 shadow-sm md:sticky md:top-6">
      <p>
        <span className="text-xl font-bold">{priceFormatter.format(pricePerNight)}</span>
        {" por noche"}
      </p>
      <div role="group" aria-label="Número de huéspedes" className="space-y-2">
        <p className="font-semibold">Huéspedes</p>
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            aria-label="Restar un huésped"
            disabled={guests === 1}
            onClick={() => setGuests((current) => Math.max(1, current - 1))}
            className="h-11 w-11 shrink-0 rounded-full border border-zinc-300 text-xl hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-rose-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>
          <p role="status">{guests}</p>
          <button
            type="button"
            aria-label="Añadir un huésped"
            disabled={guests === maxGuests}
            onClick={() => setGuests((current) => Math.min(maxGuests, current + 1))}
            className="h-11 w-11 shrink-0 rounded-full border border-zinc-300 text-xl hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-rose-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
        <p className="text-sm text-zinc-600">Máximo: {maxGuests} {maxGuests === 1 ? "huésped" : "huéspedes"}</p>
      </div>
      <button type="button" disabled aria-describedby="booking-notice" className="min-h-11 w-full cursor-not-allowed rounded-full bg-rose-600 px-4 py-3 font-semibold text-white">
        Reserva no disponible
      </button>
      <p id="booking-notice" className="text-sm text-zinc-600">
        Aplicación ficticia: no se realizan reservas ni pagos.
      </p>
    </aside>
  );
};
