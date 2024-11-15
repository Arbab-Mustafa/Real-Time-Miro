import React from "react";
import Canvas from "../_components/canvas";
import Room from "../../../components/room";
import Loading from "../_components/loading";
interface BoardIdPageProps {
  params: {
    boardid: string;
  };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
  return (
    <Room roomId={params.boardid} fallback={<Loading />}>
      <Canvas boardId={params.boardid} />;
    </Room>
  );
};

export default BoardIdPage;
