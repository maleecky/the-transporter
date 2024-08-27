"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { rows } from "@/lib/constants";
import clsx from "clsx";

interface Props {
  active: boolean | undefined;
  value: string | undefined;
  tagId: number;
  onSelectHandler: (id: number, value: string) => void;
}

export function SearchDropdown({
  tagId,
  active,
  value,
  onSelectHandler,
}: Props) {
  const [open, setOpen] = React.useState(false);

  const destinations = Array.from(
    new Set(rows.map((item) => item.destination))
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={clsx(
            "w-[140px] justify-between items-center font-[400] text-black   text-[13px] py-1 h-max rounded-lg  pr-5 pl-2 !outline-none !border-none focus-visible:ring-transparent",
            {
              "bg-blue-400 !text-white hover:bg-blue-400": active,
              "bg-[#f1f1f1]": !active,
            }
          )}
        >
          {value
            ? destinations.find((destination) => destination === value)
            : "Destination"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[140px] p-0">
        <Command>
          <CommandInput
            className="text-xs"
            placeholder="Search destination..."
          />
          <CommandList>
            <CommandEmpty>No destination found.</CommandEmpty>
            <CommandGroup>
              {destinations.map((destination) => (
                <CommandItem
                  key={destination}
                  value={destination}
                  onSelect={(currentValue) => {
                    onSelectHandler(tagId, currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === destination ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {destination}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
