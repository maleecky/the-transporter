import React from "react";
import TableUi from "@/components/global/table/table";

const OrdersPage = ({
  searchParams,
}: {
  searchParams?: { page?: string; query?: string };
}) => {
  const query = searchParams?.query ?? "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="p-4 flex-1 !pt-[30px]">
      <TableUi query={query} currentPage={currentPage} />
    </div>
  );
};

export default OrdersPage;
