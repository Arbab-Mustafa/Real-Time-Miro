"use client";
import React from "react";
import EmptyOrg from "./_components/EmptyOrg";
import { useOrganization } from "@clerk/nextjs";
import BoardList from "./_components/BoardList";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorite?: string;
  };
}

const Dashboard = ({ searchParams }: DashboardPageProps) => {
  const { organization } = useOrganization();
  return (
    <div className=" flex-1 h-[calc(100%-80px)] p-5">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default Dashboard;
