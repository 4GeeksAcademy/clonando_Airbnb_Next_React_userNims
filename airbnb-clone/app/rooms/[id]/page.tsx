import { Navbar } from "@/components/Navbar";
import { RoomDetails } from "@/components/RoomDetails";
import { Suspense } from "react";

interface RoomPageProps {
  params: Promise<{ id: string }>;
}

const ResolvedRoom = async ({ params }: RoomPageProps) => {
  const { id } = await params;
  return <RoomDetails key={id} id={id} />;
};

const RoomPage = ({ params }: RoomPageProps) => {
  return (
    <>
      <Suspense fallback={<p role="status" className="p-4">Cargando alojamiento…</p>}>
        <Navbar />
        <ResolvedRoom params={params} />
      </Suspense>
    </>
  );
};

export default RoomPage;
