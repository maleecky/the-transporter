import { Props } from "@/lib/types";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import React from "react";

interface FilterProps {
  children: React.ReactNode;
  active?: boolean;
  plain?: boolean;
}

const FilterTag = ({ children, active, plain }: FilterProps) => {
  return (
    <div
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
