"use client";
import React from "react";
import { DropdownProvider, useDropdown } from "./dropdown-context";
import { Props } from "@/lib/types";

export const DropdownMenu = ({ children }: Props) => {
  return <DropdownProvider>{children}</DropdownProvider>;
};

export const DropdownMenuContent = ({ children }: Props) => {
  const { isOpen } = useDropdown();

  if (!isOpen) return null;

  return (
    <div className="absolute pt-1 bg-white z-10 border w-full  rounded-bl-xl rounded-br-xl shadow shadow-slate-100">
      {children}
    </div>
  );
};

export const DropdownMenuWrapper = ({ children }: Props) => {
  const { dropdownRef } = useDropdown();

  return (
    <div ref={dropdownRef} className="relative">
      {children}
    </div>
  );
};

export const DropdownMenuTrigger = ({
  asChild,
  children,
}: {
  asChild?: boolean;
  children: React.ReactElement;
}) => {
  const { toggleDropdown } = useDropdown();

  if (asChild) {
    return React.cloneElement(children, { onClick: toggleDropdown });
  }

  return (
    <div
      role="button"
      className="bg-transparent !p-0 h-max hover:bg-transparent "
      onClick={toggleDropdown}
    >
      {children}
    </div>
  );
};
