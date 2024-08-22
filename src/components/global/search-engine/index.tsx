"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";

import { ChevronDown, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import React, { useRef } from "react";
import FilterTag from "./filter-tag";

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
        <FilterTag plain active>
          All
        </FilterTag>
        <FilterTag>Amount</FilterTag>
        <FilterTag>Date</FilterTag>
        <FilterTag>Status</FilterTag>
        <FilterTag plain>Ago</FilterTag>
        <FilterTag plain>Pms</FilterTag>
        <FilterTag plain>Both</FilterTag>
        <FilterTag>Destination</FilterTag>
      </div>
    </div>
  );
};

export default SearchEngine;
