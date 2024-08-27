/* eslint-disable react/display-name */
"use client";

import * as React from "react";
import { ChevronDown, ChevronsUpDown } from "lucide-react";
import clsx from "clsx";
import { SearchDropdown } from "./search-dropdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuWrapper,
} from "../navigation-dropdown/dropdowns";
import { useDropdown } from "../navigation-dropdown/dropdown-context";
import { useSearch } from "./search-context";

type optionType = {
  id: number;
  label: string;
};

interface DropdownProps {
  label: string;
  active?: boolean;
  options?: optionType[] | boolean;
  tagId: number;
}

const FilterButtonDropdown = React.forwardRef<HTMLButtonElement, DropdownProps>(
  ({ label, active, options, tagId }: Readonly<DropdownProps>, ref) => {
    const { onSelectionChange, value } = useSearch();

    return Array.isArray(options) ? (
      <div>
        <DropdownMenu>
          <FilterDropdownWrapper>
            <DropdownMenuTrigger>
              <button
                className="bg-[#f1f1f1]  text-sm font-[400] text-black relative flex items-center gap-1 pr-6 pl-2 py-1 rounded-lg"
                ref={ref}
              >
                <span>{label}</span>
                <div className="absolute right-0 p-[5px]">
                  <ChevronsUpDown width={10} />
                </div>
              </button>
            </DropdownMenuTrigger>
            <FilterOptions>
              {options.map((option) => (
                <div
                  className="px-4 py-2 border-b-slate-50   flex items-center gap-2 text-left w-full hover:bg-[#f1f1f1]"
                  key={option.id}
                >
                  <input
                    type="radio"
                    id={option.label}
                    name="search-dropdown"
                    value={option.label}
                    className="radio absolute opacity-0 pointer-events-none"
                  />
                  <div className="custom-radio"></div>
                  <label htmlFor={option.label}>{option.label}</label>
                </div>
              ))}
            </FilterOptions>
          </FilterDropdownWrapper>
        </DropdownMenu>
        {/* <button
          className="bg-[#f1f1f1] relative flex items-center text-[13px] py-1 pr-5 pl-3 rounded-lg"
          onClick={handleModalOpen}
        >
          <div>{label}</div>
          <div className="absolute right-0 pr-1">
            <ChevronDown width={12} className="" />
          </div>
        </button> */}
        {/* <div
          ref={ref}
          className={clsx("absolute z-30 bg-white ", {
            "p-4 shadow-lg": isOpen,
          })}
        >
          {isOpen &&
            options.map((item) => <div key={item.id}>{item.label}</div>)}
        </div>
      </div> */}
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
        value={value.destination}
        tagId={tagId}
        onSelectHandler={onSelectionChange}
      />
    );
  }
);

const FilterOptions: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isOpen } = useDropdown();

  if (!isOpen) return null;

  return (
    <div className="absolute flex mt-1 flex-col items-start bg-white z-50  shadow-lg rounded-lg ">
      {children}
    </div>
  );
};

const FilterDropdownWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { dropdownRef } = useDropdown();

  return <div ref={dropdownRef}>{children}</div>;
};

export default FilterButtonDropdown;
