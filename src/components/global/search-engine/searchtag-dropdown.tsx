"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { Input } from "@/components/ui/input";

type optionType = {
  id: number;
  value: string;
  label: string;
};

interface DropdownProps {
  label: string;
  active?: boolean;
  plain?: boolean;
  options?: optionType[] | boolean;
}

export default function FilterButtonDropdown({
  label,
  active,
  plain,
  options,
}: Readonly<DropdownProps>) {
  const [position, setPosition] = React.useState("lightAmount");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={clsx(
            "flex relative items-center   text-[13px] py-1 h-max rounded-lg  pr-5 pl-2 !outline-none !border-none focus-visible:ring-transparent",
            {
              "bg-blue-400 text-white": active,
              "bg-[#f1f1f1]": !active,
              "": plain,
            }
          )}
        >
          {label}
          <div className="absolute right-0 pr-1">
            <ChevronDown width={12} className="" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50 text-xs  ">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {Array.isArray(options) ? (
            options.map((option) => (
              <DropdownMenuRadioItem key={option.id} value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            ))
          ) : (
            <div className="p-[2px]">
              <Input
                type="text"
                placeholder={`Search ${label}`}
                className="text-xs placeholder:text-slate-400 bg-slate-50"
              />
            </div>
          )}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
