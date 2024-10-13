"use client";
import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
// import Image from "next/image";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Star } from "lucide-react";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],

  weight: ["600"],
});

const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favorite = searchParams.get("favorites");

  return (
    <div className="hidden md:flex flex-col    space-y-6 pl-3 pt-5 w-[206px]">
      <Link href="/">
        <div className="flex items-center  gap-x-2">
          {/* <Image src="" alt="logo" height={60} width={60} /> */}
          <span className={cn("font-semibold text-2xl", font.className)}>
            MIRO
          </span>
        </div>
      </Link>

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyItems: "space-between",
              backgroundColor: "white",
            },
          },
        }}
      />

      <div className="space-y-1 w-full">
        <Button
          variant={favorite ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="font-normal justify-start  px-2  w-full"
        >
          <Link href="/">
            <LayoutDashboard className="h-4 w-4  mr-2" />
            Team boards
          </Link>
        </Button>
        <Button
          variant={favorite ? "secondary" : "ghost"}
          asChild
          size="lg"
          className="font-normal justify-start  px-2  w-full"
        >
          <Link
            href={{
              pathname: "/",
              query: { favorite: true },
            }}
          >
            <Star className="h-4 w-4  mr-2" />
            Fav boards
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OrgSidebar;
