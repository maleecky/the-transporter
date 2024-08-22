"use client";

import React, { useState } from "react";
import MenuTrigger from "./menu-trigger-button";
import Overlay from "./overlay";

const OverlayMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOverlay() {
    setIsOpen((prev) => !prev);
  }

  function exitOverlay() {
    setIsOpen(false);
  }
  return (
    <div>
      <MenuTrigger toggleOverlay={toggleOverlay} />
      {isOpen && <Overlay exitOverlay={exitOverlay} />}
    </div>
  );
};

export default OverlayMenu;
