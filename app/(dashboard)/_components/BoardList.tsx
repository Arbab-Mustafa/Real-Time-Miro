/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import EmptySearch from "./emptySearch";
import EmptyFav from "./EmptyFav";
import Emptyboard from "./Emptyboard";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorite?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

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
      {JSON.stringify({
        query,
      })}
    </div>
  );
};

export default BoardList;
