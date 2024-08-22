import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  path: string;
  variants?: "plain" | "primary" | "outline";
};

const DropdownMenuOption = ({ children, path, variants }: Props) => {
  if (variants === "primary") {
    return (
      <div className="border-t   ">
        <Link
          href={path}
          className="hover:bg-slate-100 p-2 text-center block w-full  rounded text-black"
        >
          {children}
        </Link>
      </div>
    );
  }
  return (
    <Link
      href={path}
      className="flex hover:bg-slate-50 px-4 py-[8px] items-center gap-1"
    >
      {children}
    </Link>
  );
};

export default DropdownMenuOption;
