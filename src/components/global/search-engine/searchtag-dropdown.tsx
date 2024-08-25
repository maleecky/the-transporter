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
import { SearchDropdown } from "./search-dropdown";

type optionType = {
  id: number;
  label: string;
};

interface DropdownProps {
  label: string;
  active?: boolean;
  plain?: boolean;
  options?: optionType[] | boolean;
  value?: string;
  position: string;
  tagId: number;
  setPosition: (id: number, selectedLabel: string) => void;
  onSelectHandler: (id: number, value: string) => void;
}

export default function FilterButtonDropdown({
  label,
  active,
  plain,
  options,
  position,
  tagId,
  setPosition,
  value,
  onSelectHandler,
}: Readonly<DropdownProps>) {
  const touchStartY = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const touchDelta = Math.abs(touchEndY - (touchStartY.current || 0));

    // Threshold for detecting a tap
    if (touchDelta < 10) {
      triggerDropdown();
    }
  };

  const triggerDropdown = () => {
    const button = document.getElementById(`dropdown-${tagId}`);
    if (button) {
      button.click();
    }
  };

  return Array.isArray(options) ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          id={`dropdown-${tagId}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => e.stopPropagation()}
          variant="ghost"
          className={clsx(
            "flex relative items-center   text-[13px] py-1 h-max rounded-lg  pr-5 pl-2 !outline-none !border-none focus-visible:ring-transparent",
            {
              "bg-blue-400 hover:bg-blue-400 hover:text-white text-white":
                active,
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
        <DropdownMenuRadioGroup
          value={position}
          onValueChange={(value) => setPosition(tagId, value)}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.id} value={option.label}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <SearchDropdown
      active={active}
      value={value}
      tagId={tagId}
      onSelectHandler={onSelectHandler}
    />
  );
}
