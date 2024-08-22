"use client";

import React from "react";
import { Button } from "../../ui/button";
import { ChevronDown } from "lucide-react";
import { useDropdown } from "@/components/global/navigation-dropdown/dropdown-context";
import clsx from "clsx";

interface Props {
  label: string;
}

const ProfileBtn = ({ label }: Props) => {
  const { isOpen } = useDropdown();
  return (
    <Button
      variant={"ghost"}
      className={clsx(
        "flex p-0 h-0 text-sm font-[400] gap-2 items-center w-full rounded-none leading-tight mb-[-1px]  backdrop-blur-sm   ",
        {
          "rounded-tl-2xl rounded-tr-2xl shadow shadow-slate-100": isOpen,
          "rounded-full ": !isOpen,
        }
      )}
    >
      <div>{label}</div>
      <div className="flex items-center">
        <div className="w-6 h-6 flex  items-center justify-center text-xs bg-blue-400 text-white rounded-full">
          <div>{label[0]}</div>
        </div>
      </div>
    </Button>
  );
};

export default ProfileBtn;
