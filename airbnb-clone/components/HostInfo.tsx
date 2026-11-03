import Image from "next/image";
import type { Host } from "@/types/listing";

interface HostInfoProps {
  host: Host;
}

export const HostInfo = ({ host }: HostInfoProps) => (
  <section aria-label="Anfitrión" className="flex items-center gap-4 border-y border-zinc-200 py-6">
    <Image
      src={host.avatarSrc}
      alt={host.avatarAlt}
      width={64}
      height={64}
      className="h-16 w-16 shrink-0 rounded-full"
    />
    <div className="min-w-0">
      <h2 className="font-semibold">Anfitrión: {host.name}</h2>
      <p className="text-sm text-zinc-600">
        {host.yearsHosting} {host.yearsHosting === 1 ? "año" : "años"} como anfitrión
      </p>
    </div>
  </section>
);
