import { Navbar } from "@/components/Navbar";
import { RoomDetails } from "@/components/RoomDetails";

interface RoomPageProps {
  params: Promise<{ id: string }>;
}

const RoomPage = async ({ params }: RoomPageProps) => {
  const { id } = await params;

  return (
    <>
      <Navbar />
      <RoomDetails key={id} id={id} />
    </>
  );
};

export default RoomPage;
