/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import EmptySearch from "./emptySearch";
import EmptyFav from "./EmptyFav";
import Emptyboard from "./Emptyboard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import BoardCard from "./boardCard";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorite?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (!data.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && query.favorite) {
    return <EmptyFav />;
  }

  if (!data.length) {
    return <Emptyboard />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {query.favorite ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-4 pb-9 ">
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imgUrl={board.imgUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={false}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardList;
