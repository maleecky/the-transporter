import React from "react";
import ProfileBtn from "./profile-btn";

import DropdownOption from "./_components/dropdown_options";
import { Languages, Receipt, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuWrapper,
} from "@/components/global/navigation-dropdown/dropdowns";

const ProfileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuWrapper>
        <DropdownMenuTrigger>
          <ProfileBtn label="Relax company" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <ul className="flex flex-col ">
            <li>
              <DropdownOption path="/profile">
                <User width={14} />
                Profile
              </DropdownOption>
            </li>
            <li>
              <DropdownOption path="/billing">
                <Receipt width={14} />
                Billing
              </DropdownOption>
            </li>
            <li>
              <DropdownOption path="/language">
                <Languages width={14} />
                Language
              </DropdownOption>
            </li>
            <li>
              <DropdownOption path="/sign-out" variants="primary">
                Sign out
              </DropdownOption>
            </li>
          </ul>
        </DropdownMenuContent>
      </DropdownMenuWrapper>
    </DropdownMenu>
  );
};

export default ProfileMenu;
