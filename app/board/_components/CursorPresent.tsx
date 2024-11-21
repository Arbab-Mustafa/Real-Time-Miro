"use client";

import { memo } from "react";

import { useOthersConnectionIds } from "@/liveblocks.config";
import Cursor from "./Cursor";

//

const Cursors = () => {
  const id = useOthersConnectionIds();
  return (
    <>
      {id.map((connectionId) => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

export const CursorPresent = memo(() => {
  return (
    <>
      <Cursors />
    </>
  );
});

CursorPresent.displayName = "CursorPresent";
