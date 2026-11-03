"use client";

import { useEffect, useState } from "react";
import { CategoryFilters } from "@/components/CategoryFilters";
import { HomeIntro } from "@/components/HomeIntro";
import { ListingGrid } from "@/components/ListingGrid";
import { Navbar } from "@/components/Navbar";
import { listings as initialListings } from "@/data/listings";
import type { Listing } from "@/types/listing";

const categories = [...new Set(initialListings.map((listing) => listing.category))];

const HomePage = () => {
  const [listings, setListings] = useState<readonly Listing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings(initialListings);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const normalizedQuery = query.trim().toLocaleLowerCase("es");
  const filteredListings = listings.filter((listing) => {
    const matchesQuery = [listing.name, listing.location].some((text) =>
      text.toLocaleLowerCase("es").includes(normalizedQuery),
    );
    return matchesQuery &&
      (activeCategory === null || listing.category === activeCategory);
  });

  return (
    <>
      <Navbar query={query} onQueryChange={setQuery} />
      <main className="mx-auto w-full max-w-[1200px] space-y-8 px-4 py-6 md:px-6">
        <CategoryFilters
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <HomeIntro />
        <section aria-labelledby="listings-heading" aria-busy={isLoading}>
          <h2 id="listings-heading" className="mb-4 text-xl font-semibold">
            Alojamientos para tu próxima escapada
          </h2>
          <p role="status" className="mb-4 text-sm text-zinc-600">
            {isLoading
              ? "Cargando alojamientos…"
              : `${filteredListings.length} alojamientos encontrados`}
          </p>
          {!isLoading && (filteredListings.length > 0
            ? <ListingGrid listings={filteredListings} />
            : <p>No hay alojamientos que coincidan con tu búsqueda y categoría.</p>)}
        </section>
      </main>
    </>
  );
};

export default HomePage;
