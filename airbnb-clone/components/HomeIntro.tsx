import Link from "next/link";

export const HomeIntro = () => (
  <section className="space-y-3">
    <p className="text-sm font-semibold text-rose-600">Tu próxima escapada empieza aquí</p>
    <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
      Encuentra un lugar para desconectar
    </h1>
    <p className="max-w-2xl text-zinc-600">
      Explora alojamientos ficticios y descubre tu estancia ideal.
      Esta aplicación de demostración no permite reservar.
    </p>
    <Link href="/catalog" className="inline-flex min-h-11 items-center font-semibold text-rose-600 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-rose-600">
      Explorar el catálogo
    </Link>
  </section>
);
