import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import Image from "next/image";
// import { Poppins } from "next/font/google";

// import { cn } from "../../../lib/utils";
import { Button } from "@/components/ui/button";

//
interface BoardInfoProps {
  boardId: string;
}
//

// const font = Poppins({
//   subsets: ["latin"],

//   weight: ["600"],
// });
const BoardInfo = ({ boardId }: BoardInfoProps) => {
  const data = useQuery(api.board.get, { id: boardId as Id<"boards"> });

  if (!data) return <p>Null </p>;

  return (
    <div className="absolute  top-2 left-2 bg-white  rounded-md px-1.5 h-12 shadow-sm flex items-center">
      <Button className="px-2">
        {/* <Image src="/logo.svg" alt="" height={40} width={40} /> */}
        <p>MIRO</p>
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
