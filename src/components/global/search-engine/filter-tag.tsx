"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import React from "react";
import { tags } from ".";

interface FilterProps {
  children: React.ReactNode;
  active?: boolean;
  plain?: boolean;
  handleclick: (tags: tags) => void;
}

const FilterTag = ({ children, handleclick, active, plain }: FilterProps) => {
  return (
    <div
      role="button"
      onClick={handleclick}
      className={clsx(
        "flex relative items-center   text-[13px] py-1 rounded-lg",
        {
          "bg-blue-400 text-white": active,
          "bg-[#f1f1f1]": !active,
          "pr-5 pl-2": !plain,
          "px-3": plain,
        }
      )}
    >
      {children}
      <div className="absolute right-0 pr-1">
        {!plain && <ChevronDown width={12} className="" />}
      </div>
    </div>
  );
};

export default FilterTag;
