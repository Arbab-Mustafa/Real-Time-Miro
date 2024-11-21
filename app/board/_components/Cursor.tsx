"use client";
import React from "react";
import { memo } from "react";

import { connectionIdToColor } from "@/lib/utils";
import { MousePointer2 } from "lucide-react";
import { useOther } from "@/liveblocks.config";

interface CursorProps {
  connectionId: number;
}

const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);
  const name = info?.name || "TeamMate";

  if (!cursor) return null;

  const { x, y } = cursor;

  return (
    <foreignObject
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
      height={50}
      width={50}
      className="relative drop-shadow-md"
    >
      <MousePointer2
        className="w-5 h-5"
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId),
        }}
      />
    </foreignObject>
  );
});

export default Cursor;

Cursor.displayName = "Cursor";
