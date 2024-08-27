"use client";

import { Button } from "@/components/ui/button";
import clsx from "clsx";

import { X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import React, { createRef, useRef } from "react";
import FilterButtonDropdown from "./filterButton-dropdown";
import { tags } from "@/lib/types";
import SearchProvider, { useSearch } from "./search-context";

const SearchEngineWrapper = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputEl = useRef<HTMLInputElement | null>(null);
  const elRef = createRef<HTMLButtonElement>();

  const { tags, toggleTag, updateTag } = useSearch();

  // const handleOutsideClick = useCallback(
  //   (e: MouseEvent) => {
  //     if (elRef.current && !elRef.current.contains(e.target as Node)) {
  //       setIsOpen(false);
  //     }
  //   },
  //   [elRef]
  // );

  // React.useEffect(() => {
  //   if (isOpen) document.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [isOpen, handleOutsideClick]);

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

  const handleClick = (tag: tags) => {
    toggleTag(tag);
  };

  // const ondropdownClick = (id: number, selectedLabel: string) => {
  //   updateTag(id, selectedLabel);

  //   setPosition(selectedLabel);
  // };

  // const onSelectionChange = (id: number, currentValue: string) => {
  //   updateTag(id, currentValue);
  //   setValue(currentValue === value ? "" : currentValue);
  // };

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

      <div className="flex gap-3 overflow-x-auto overflow-y-hidden disable-scroll items-center">
        {tags.map((tag) => {
          if (tag.dropdown) {
            return (
              <FilterButtonDropdown
                key={tag.id}
                label={tag.label}
                options={tag.dropdown}
                tagId={tag.id}
                ref={elRef}
                active={tag.active}
              />
            );
          }
          return (
            <Button
              key={tag.id}
              onClick={() => handleClick(tag)}
              className={clsx(
                "flex relative items-center  px-3 h-max font-[400] text-[13px] py-1 rounded-lg",
                {
                  "bg-blue-400 hover:bg-blue-400 text-white": tag.active,
                  "bg-[#f1f1f1] hover:bg-[#f5f5f5]  text-black": !tag.active,
                }
              )}
            >
              {tag.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

const SearchEngine = () => {
  return (
    <SearchProvider>
      <SearchEngineWrapper />
    </SearchProvider>
  );
};

export default SearchEngine;
