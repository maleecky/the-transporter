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
  const [isOpen, setIsOpen] = React.useState(false);

  const elRef = React.useRef<HTMLDivElement | null>(null);

  function handleclick() {
    setIsOpen((prevState) => !prevState);
  }

  function handleOutsideClick(e: MouseEvent) {
    if (elRef.current && !elRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }

  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return Array.isArray(options) ? (
    <div>
      <button
        className="bg-[#f1f1f1] relative flex items-center text-[13px] py-1 pr-5 pl-3 rounded-lg"
        onClick={handleclick}
      >
        <div>{label}</div>
        <div className="absolute right-0 pr-1">
          <ChevronDown width={12} className="" />
        </div>
      </button>
      <div
        ref={elRef}
        className={clsx("absolute z-30 bg-white ", {
          "p-4 shadow-lg": isOpen,
        })}
      >
        {isOpen && options.map((item) => <div key={item.id}>{item.label}</div>)}
      </div>
    </div>
  ) : (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button
    //       id={`dropdown-${tagId}`}
    //       onTouchStart={handleTouchStart}
    //       onTouchEnd={handleTouchEnd}
    //       onClick={(e) => e.stopPropagation()}
    //       variant="ghost"
    //       className={clsx(
    //         "flex relative items-center   text-[13px] py-1 h-max rounded-lg  pr-5 pl-2 !outline-none !border-none focus-visible:ring-transparent",
    //         {
    //           "bg-blue-400 hover:bg-blue-400 hover:text-white text-white":
    //             active,
    //           "bg-[#f1f1f1]": !active,
    //           "": plain,
    //         }
    //       )}
    //     >
    //       {label}
    //       <div className="absolute right-0 pr-1">
    //         <ChevronDown width={12} className="" />
    //       </div>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent className="w-50 text-xs  ">
    //     <DropdownMenuRadioGroup
    //       value={position}
    //       onValueChange={(value) => setPosition(tagId, value)}
    //     >
    //       {options.map((option) => (
    //         <DropdownMenuRadioItem key={option.id} value={option.label}>
    //           {option.label}
    //         </DropdownMenuRadioItem>
    //       ))}
    //     </DropdownMenuRadioGroup>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <SearchDropdown
      active={active}
      value={value}
      tagId={tagId}
      onSelectHandler={onSelectHandler}
    />
  );
}
