"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";

import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import React, { useRef } from "react";
import FilterTag from "./filter-tag";
import FilterButtonDropdown from "./searchtag-dropdown";

const AmountOptions = [
  { id: 0, label: "Less than 50k", value: "lightAmount" },
  { id: 1, label: "50k upto 410k", value: "regularAmount" },
  { id: 2, label: "410k upto 610k", value: "mediumAmount" },
  { id: 3, label: "610k upto 1000k", value: "largeAmount" },
  { id: 4, label: "Above 1000k", value: "extraLargeAmount" },
];

const statusOptions = [
  { id: 0, label: "Pending", value: "pending" },
  { id: 0, label: "Loading", value: "loading" },
  { id: 0, label: "Transit", value: "transit" },
  { id: 0, label: "Delivered", value: "delivered" },
];

const dateOptions = [
  { id: 0, label: "This month", value: "recently" },
  { id: 0, label: "Last 3 months", value: "threeMonths" },
  { id: 0, label: "Last 6 months", value: "sixMonths" },
  { id: 0, label: "Last year", value: "lastYear" },
  { id: 0, label: "Custom", value: "custom" },
];

type options = { id: number; label: string; value: string };

type tags = {
  id: number;
  label: string;
  dropdown: options[] | boolean;
  active?: boolean;
};

const searchTags: tags[] = [
  {
    id: 0,
    label: "All",
    dropdown: false,
    active: true,
  },
  {
    id: 1,
    label: "Amount",
    dropdown: [
      { id: 0, label: "Less than 50k", value: "lightAmount" },
      { id: 1, label: "50k upto 410k", value: "regularAmount" },
      { id: 2, label: "410k upto 610k", value: "mediumAmount" },
      { id: 3, label: "610k upto 1000k", value: "largeAmount" },
      { id: 4, label: "Above 1000k", value: "extraLargeAmount" },
    ],
  },
  {
    id: 2,
    label: "Date",
    dropdown: [
      { id: 0, label: "This month", value: "recently" },
      { id: 0, label: "Last 3 months", value: "threeMonths" },
      { id: 0, label: "Last 6 months", value: "sixMonths" },
      { id: 0, label: "Last year", value: "lastYear" },
      { id: 0, label: "Custom", value: "custom" },
    ],
  },
  {
    id: 3,
    label: "Status",
    dropdown: [
      { id: 0, label: "Pending", value: "pending" },
      { id: 0, label: "Loading", value: "loading" },
      { id: 0, label: "Transit", value: "transit" },
      { id: 0, label: "Delivered", value: "delivered" },
    ],
  },
  {
    id: 4,
    label: "Ago",
    dropdown: false,
  },
  {
    id: 5,
    label: "Pms",
    dropdown: false,
  },
  {
    id: 6,
    label: "Both",
    dropdown: false,
  },
  {
    id: 7,
    label: "Destination",
    dropdown: true,
  },
];

const SearchEngine = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputEl = useRef<HTMLInputElement | null>(null);

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  function handleSearchFieldErase() {
    if (inputEl.current) {
      inputEl.current.value = "";

      replace(pathname);
    }
  }

  const emptyInput =
    inputEl.current?.value === "" || inputEl.current?.value === undefined;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative  flex items-center justify-end">
        <input
          className="rounded-full w-full m-auto pr-14  placeholder:text-[#1e1e1e] bg-white  border py-2 px-4   focus-visible:outline-none"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          placeholder="Search orders"
          ref={inputEl}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <div className="flex gap-2 absolute p-4">
          <Button
            variant="ghost"
            className={clsx("p-0 h-0", {
              "w-max": !emptyInput,
              "w-0": emptyInput,
            })}
            onClick={handleSearchFieldErase}
          >
            <X width={22} className="text-red-500" />
          </Button>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto disable-scroll items-center">
        {searchTags.map((tag) => {
          if (tag.dropdown) {
            return (
              <FilterButtonDropdown
                key={tag.id}
                label={tag.label}
                options={tag.dropdown}
              />
            );
          }
          return (
            <FilterTag key={tag.id} plain active={tag.active}>
              {tag.label}
            </FilterTag>
          );
        })}
      </div>
    </div>
  );
};

export default SearchEngine;
