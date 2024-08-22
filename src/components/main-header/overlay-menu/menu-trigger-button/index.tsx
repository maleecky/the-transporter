import { Button } from "@/components/ui/button";
import { Menu, Settings } from "lucide-react";
import React from "react";

type Props = {
  toggleOverlay: () => void;
};

const MenuTrigger = ({ toggleOverlay }: Props) => {
  return (
    <Button
      onClick={toggleOverlay}
      variant="ghost"
      className=" relative flex items-center px-2  !h-8"
    >
      <Settings color="#6e6e6e" />
    </Button>
  );
};

export default MenuTrigger;
