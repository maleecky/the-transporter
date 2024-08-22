"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { iconLink } from "@/lib/types";
import clsx from "clsx";
import {
  Banknote,
  BookUser,
  ChartArea,
  CreditCard,
  File,
  Folder,
  Forklift,
  LayoutDashboard,
  Menu,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MenuListNavigation = () => {
  const activePath = usePathname();
  const salesIsActive = activePath.includes("sales");
  const purchaseIsActive = activePath.includes("purchase");
  return (
    <div className="flex justify-between items-center">
      <nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="flex p-0 h-0 gap-2 items-center">
              <Menu width={16} />
              <span>Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className=" w-80 pt-14 overflow-auto">
            <div className="flex flex-col">
              <SheetClose asChild>
                <MenuOption path="/dashboard">
                  <LayoutDashboard width={14} />
                  <div>Dashboard</div>
                </MenuOption>
              </SheetClose>
              <SheetClose asChild>
                <MenuOption path="/orders">
                  <ShoppingCart width={14} />
                  <div>Orders</div>
                </MenuOption>
              </SheetClose>

              <div className="p-2">
                <div
                  className={clsx("", {
                    "text-blue-600": salesIsActive,
                  })}
                >
                  Sales
                </div>

                <ul className="flex flex-col [&>li]:p-2">
                  <SheetClose asChild>
                    <MenuOption path="/sales/customers">
                      <BookUser width={14} />
                      <div>Customers</div>
                    </MenuOption>
                  </SheetClose>

                  <SheetClose asChild>
                    <MenuOption path="/sales/invoices">
                      <Banknote width={14} />
                      <div>Invoices</div>
                    </MenuOption>
                  </SheetClose>

                  <SheetClose asChild>
                    <MenuOption path="/sales/payments">
                      <CreditCard width={14} />
                      <div>Payments Received</div>
                    </MenuOption>
                  </SheetClose>
                </ul>
              </div>
              <div className="p-2">
                <div
                  className={clsx("", {
                    "text-blue-600": purchaseIsActive,
                  })}
                >
                  Purchase
                </div>

                <ul className="flex flex-col [&>li]:p-2">
                  <SheetClose asChild>
                    <MenuOption path="/purchase/vendors">
                      <BookUser width={14} />
                      <div>Vendors</div>
                    </MenuOption>
                  </SheetClose>

                  <SheetClose asChild>
                    <MenuOption path="/purchase/expenses">
                      <Banknote width={14} />
                      <div>Expenses</div>
                    </MenuOption>
                  </SheetClose>
                  <SheetClose asChild>
                    <MenuOption path="/purchase/fuelexpenses">
                      <Banknote width={14} />
                      <div>Fuel Expenses</div>
                    </MenuOption>
                  </SheetClose>

                  <SheetClose asChild>
                    <MenuOption path="/purchase/bills">
                      <CreditCard width={14} />
                      <div>Bills</div>
                    </MenuOption>
                  </SheetClose>
                </ul>
              </div>

              <SheetClose asChild>
                <MenuOption path="/vehicles">
                  <Forklift width={14} />
                  <div>Vehicles</div>
                </MenuOption>
              </SheetClose>
              <SheetClose asChild>
                <MenuOption path="/drivers">
                  <User width={14} />
                  <div>Drivers</div>
                </MenuOption>
              </SheetClose>
              <SheetClose asChild>
                <MenuOption path="/reports">
                  <ChartArea width={14} />
                  <div>Reports</div>
                </MenuOption>
              </SheetClose>
              <SheetClose asChild>
                <MenuOption path="/documents">
                  <Folder width={14} />
                  <div>Documents</div>
                </MenuOption>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
      <nav className="hidden">Orders</nav>
      <nav>Return to top</nav>
    </div>
  );
};

const MenuOption = ({ path, children }: iconLink) => {
  const activeLink = usePathname();
  const isActive = path === activeLink;
  return (
    <Link
      className={clsx(
        " flex items-center gap-2 p-2 hover:bg-slate-100 border-b ",
        { "bg-slate-100": isActive }
      )}
      href={path}
    >
      {children}
    </Link>
  );
};

export default MenuListNavigation;
