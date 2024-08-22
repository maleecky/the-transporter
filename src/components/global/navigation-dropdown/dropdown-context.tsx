"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Props } from "@/lib/types";

interface DropdownContextType {
  isOpen: boolean;
  toggleDropdown: () => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

const defaultContextValue: DropdownContextType = {
  isOpen: false,
  toggleDropdown: () => {},
  dropdownRef: { current: null },
};

const DropdownContext = createContext<DropdownContextType>(defaultContextValue);

export const DropdownProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const contextObj = useMemo(
    () => ({
      isOpen,
      toggleDropdown: () => setIsOpen((prev) => !prev),
      dropdownRef,
    }),
    [isOpen]
  );

  return (
    <DropdownContext.Provider value={contextObj}>
      {children}
    </DropdownContext.Provider>
  );
};

export const useDropdown = (): DropdownContextType => {
  return useContext(DropdownContext);
};
