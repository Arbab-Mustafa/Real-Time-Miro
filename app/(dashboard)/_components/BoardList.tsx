/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import EmptySearch from "./emptySearch";
import EmptyFav from "./EmptyFav";
import Emptyboard from "./Emptyboard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

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
      <div></div>
    </div>
  );
};

export default BoardList;
