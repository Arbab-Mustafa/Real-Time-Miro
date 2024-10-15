import Image from "next/image";
import Link from "next/link";
import React, { Children } from "react";
import OverLay from "./overLay";

import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import Action from "@/components/action";
import { MoreHorizontal } from "lucide-react";

interface BoardCardProps {
  id: string;
  title: string;
  imgUrl: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  id,
  title,
  imgUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorlabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imgUrl} alt={title} fill className="object-fit" />
          <OverLay />
          <Action id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="w-5 h-5 text-white opacity-75  hover:opacity-75 transition-opacity" />
            </button>
          </Action>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorlabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

export default BoardCard;

BoardCard.Skeleton = function BoardCardSklten() {
  return (
    <div className=" aspect-[100/127] rounded-lg   overflow-hidden">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
