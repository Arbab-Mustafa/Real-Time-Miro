import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
// import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "../../../lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hint from "@/components/hint";

import { useRenameModel } from "@/store/useRenameModel";

//
interface BoardInfoProps {
  boardId: string;
}
//

const font = Poppins({
  subsets: ["latin"],

  weight: ["600"],
});

//

const TabSeparator = () => {
  return <div className="text-neutral-300 px-1.5"> | </div>;
};

const BoardInfo = ({ boardId }: BoardInfoProps) => {
  const { onOpen } = useRenameModel();
  const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });

  if (!data) return <p>Null </p>;

  return (
    <div className="absolute  top-2 left-2 bg-white  rounded-md px-1.5 h-12 shadow-sm flex items-center">
      <Hint label="go to board" side="bottom" sideOffset={10}>
        <Link href="/">
          <Button className="px-2" variant="board">
            {/* <Image src="/logo.svg" alt="" height={40} width={40} /> */}
            <p
              className={cn(
                "font-semibold  text-xl ml-2 text-black ",
                font.className
              )}
            >
              MIRO
            </p>
          </Button>
        </Link>
      </Hint>

      <TabSeparator />
      <Button
        variant="board"
        className="text-base px-2 font-normal"
        onClick={() => onOpen(data?._id, data.title)}
      >
        {data.title}
      </Button>
    </div>
  );
};

export default BoardInfo;

BoardInfo.Skeleton = function InfoSkeleton() {
  return (
    <div className="absolute  top-2 left-2 bg-white  rounded-md px-1.5 h-12 shadow-sm flex items-center w-[300px]" />
  );
};
