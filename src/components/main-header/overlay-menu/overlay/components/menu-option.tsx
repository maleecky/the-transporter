import { iconLink } from "@/lib/types";
import Link from "next/link";
import React from "react";

const MenuOption = ({ path, children }: iconLink) => {
  return (
    <Link
      href={path}
      className="flex hover:bg-slate-100 transition-all ease-linear duration-75 items-center gap-2 p-2"
    >
      {children}
    </Link>
  );
};

export default MenuOption;
