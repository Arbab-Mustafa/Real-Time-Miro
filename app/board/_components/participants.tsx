"use client";

import { useOthers, useSelf } from "@/liveblocks.config";
import UserAvatar from "./userAvatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_PARTICIPANTS = 2;

const Participants = () => {
  const currentUser = useSelf();
  const users = useOthers();

  const hasMoreParticipants = users.length > MAX_PARTICIPANTS;
  return (
    <div className="absolute  top-2 right-2 bg-white  rounded-md p-3 h-12 shadow-sm flex items-center">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_PARTICIPANTS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              key={connectionId}
              name={`${currentUser.info?.name} (You)`}
              src={info?.picture}
              fallback={info?.name?.[0]}
              borderColor={connectionIdToColor(connectionId)}
            />
          );
        })}

        {currentUser && (
          <UserAvatar
            name={currentUser.info?.name}
            src={currentUser.info?.picture}
            borderColor={connectionIdToColor(currentUser.connectionId)}
            fallback={currentUser.info?.name?.[0]}
          />
        )}

        {hasMoreParticipants && (
          <UserAvatar
            name={`${users.length - MAX_PARTICIPANTS} more`}
            fallback={` + ${users.length - MAX_PARTICIPANTS}`}
          />
        )}
      </div>
    </div>
  );
};

export default Participants;

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute  top-2 right-2 bg-white  rounded-md p-3 h-12 shadow-sm flex items-center w-[100px] " />
  );
};
