import { UserButton } from "@clerk/nextjs";
import DropDown from "./DropDown";
import ThemeToggle from "./ThemeToggle";
import { memo } from "react";

const NavMemo = () => {
  return (
    <div className="w-full   left-0 bg-white  z-20 flex justify-end items-center px-[2rem] py-4 border-b-2 gap-3">
      {/* <ThemeToggle /> */}
      <DropDown />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
const Nav = memo(NavMemo);
export default Nav;
