"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { tags } from "@/lib/types";
import { searchTags } from "@/lib/constants";

export interface SearchTerms {
  amount: string;
  date: string;
  status: string;
  products: string[];
  destination: string;
}

interface SearchContextProps {
  tags: tags[];
  toggleTag: (tag: tags) => void;
  updateTag: (id: number, selectedLabel: string) => void;
  value: SearchTerms;
  onSelectionChange: (id: number, currentValue: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);
const defaultSearchTerms: SearchTerms = {
  amount: "",
  date: "",
  status: "",
  products: [],
  destination: "",
};

const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tags, setTags] = useState<tags[]>(searchTags);
  const [value, setValue] = useState(defaultSearchTerms);

  const toggleTag = (tag: tags) => {
    if (tag.label.toLowerCase() === "all") {
      setTags((prev) =>
        prev.map((obj) =>
          obj.id === tag.id
            ? { ...obj, active: true }
            : { ...obj, active: false }
        )
      );
    } else {
      setTags((prev) =>
        prev.map((obj) =>
          obj.id === tag.id ? { ...obj, active: !obj.active } : obj
        )
      );

      setTags((prev) =>
        prev.map((obj) =>
          obj.label.toLowerCase() === "all" ? { ...obj, active: false } : obj
        )
      );
    }
  };

  const updateTag = (id: number, selectedLabel: string) => {
    setTags((prev) =>
      prev.map((tag) =>
        tag.id === id ? { ...tag, label: selectedLabel, active: true } : tag
      )
    );
    setTags((prev) =>
      prev.map((obj) =>
        obj.label.toLowerCase() === "all" ? { ...obj, active: false } : obj
      )
    );
  };

  const contextObj = useMemo(
    () => ({
      tags,
      toggleTag,
      updateTag,
      value,
      onSelectionChange: (id: number, currentValue: string) => {
        updateTag(id, currentValue);
        setValue((prev) => ({
          ...prev,
          destination: currentValue,
        }));
      },
    }),
    [tags, value]
  );

  return (
    <SearchContext.Provider value={contextObj}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("the context must be within the provider");
  }

  return context;
};

export default SearchProvider;
