"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  query?: string;
  onQueryChange?: (query: string) => void;
}

export const Navbar = ({ query = "", onQueryChange }: NavbarProps) => {
  const pathname = usePathname();
  return (
  <header className="border-b border-zinc-200 bg-white">
    <div className="mx-auto grid w-full max-w-[1200px] grid-cols-2 items-center gap-4 px-4 py-4 md:grid-cols-[auto_1fr_auto] md:px-6">
      <Link
        href="/"
        aria-label="Brisa, inicio"
        className="flex min-h-11 items-center gap-2 font-bold text-rose-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-600"
      >
        <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 fill-none stroke-current" strokeWidth="2">
          <path d="M5 17 16 5l11 12v10H5Z" />
          <path d="M12 27v-9h8v9" />
        </svg>
        <span className="text-xl">brisa</span>
      </Link>
      <div className="col-span-2 row-start-2 flex min-w-0 items-center gap-3 rounded-full border border-zinc-200 px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-rose-600 md:col-span-1 md:col-start-2 md:row-start-1">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-none stroke-current" strokeWidth="2">
          <circle cx="10" cy="10" r="6" />
          <path d="m15 15 5 5" />
        </svg>
        {onQueryChange ? <input
          type="search"
          aria-label="Buscar por título o ubicación"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Buscar título o ubicación"
          className="min-w-0 w-full bg-transparent text-base outline-none placeholder:text-zinc-500"
        /> : <Link href="/catalog" className="flex min-h-11 items-center font-medium">
          Explorar alojamientos
        </Link>}
      </div>
      <nav aria-label="Menú principal" className="flex justify-end gap-3 md:col-start-3">
        <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className="flex min-h-11 items-center text-sm font-medium underline-offset-4 hover:underline aria-[current=page]:font-semibold aria-[current=page]:text-rose-600 focus-visible:outline-2 focus-visible:outline-rose-600">
          Inicio
        </Link>
        <Link href="/catalog" aria-current={pathname === "/catalog" ? "page" : undefined} className="flex min-h-11 items-center text-sm font-medium underline-offset-4 hover:underline aria-[current=page]:font-semibold aria-[current=page]:text-rose-600 focus-visible:outline-2 focus-visible:outline-rose-600">
          Catálogo
        </Link>
      </nav>
    </div>
  </header>
);
};
