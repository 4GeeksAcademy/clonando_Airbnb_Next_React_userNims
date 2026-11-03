import { CatalogResults } from "@/components/CatalogResults";
import { Navbar } from "@/components/Navbar";
import { listings } from "@/data/listings";

const CatalogPage = () => (
  <>
    <Navbar />
    <main className="mx-auto w-full max-w-[1200px] space-y-6 px-4 py-6 md:px-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Alojamientos</h1>
        <p className="text-zinc-600">
          Explora todos nuestros alojamientos ficticios y compara sus precios.
        </p>
      </header>
      <CatalogResults listings={listings} />
    </main>
  </>
);

export default CatalogPage;
