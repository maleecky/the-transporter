import {
  Bell,
  Contact,
  Cookie,
  Instagram,
  PhoneCall,
  Settings,
  SunMoon,
  Twitter,
  X,
} from "lucide-react";
import React from "react";
import MenuOption from "./components/menu-option";
import { Button } from "@/components/ui/button";

type Props = {
  exitOverlay: () => void;
};
const Overlay = ({ exitOverlay }: Props) => {
  return (
    <div className="fixed bg-white z-50 flex items-center justify-center top-0 left-0 right-0 bottom-0">
      <div className="absolute top-0 right-0 p-4">
        <Button onClick={exitOverlay} variant="ghost" className="p-2">
          <X color="red" />
        </Button>
      </div>
      <ul className="flex flex-col [&>li]:border-b  w-48">
        <li>
          <MenuOption path="/notifications">
            <Bell width={14} />
            <div>
              Notifications <sup className="text-red-600 ">7</sup>
            </div>
          </MenuOption>
        </li>
        <li>
          <MenuOption path="/settings">
            <Settings width={14} />
            <div>Settings</div>
          </MenuOption>
        </li>
        <li>
          <MenuOption path="/contact-us">
            <PhoneCall width={14} />
            <div>Help desk</div>
          </MenuOption>
        </li>
        <li>
          <MenuOption path="/privacy">
            <Cookie width={14} />
            <div>Privacy Notice</div>
          </MenuOption>
        </li>
        <li>
          <MenuOption path="#">
            <SunMoon width={14} />
            <div className="flex items-center justify-between w-full">
              <div>Appearance</div>
              <div className="text-[10px]">Switch to dark</div>
            </div>
          </MenuOption>
        </li>
        <div className="space-y-2 mt-2">
          <div>Socials</div>
          <ul className="flex flex-col  [&>li]:border-b ">
            <li>
              <MenuOption path="/instagram">
                <Instagram width={14} />
                <div>Connect in instagram</div>
              </MenuOption>
            </li>
            <li>
              <MenuOption path="/twitter">
                <Twitter width={14} />
                <div>Connect in twitter</div>
              </MenuOption>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Overlay;
