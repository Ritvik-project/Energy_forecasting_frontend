import { useState } from "react";
import NavItem from "./NavItem";

const Navigation = () => {
  return (
    <>
      <div className=" top-5 absolute left-1 w-[200px]  text-black h-[100px] rounded-xl bg-white">
        <NavItem message={`Real Time Updates`} />
        <NavItem message={`Solar Generation Details`} />
        <NavItem message={`Wind Generation Details`} />
      </div>
    </>
  );
};

export default Navigation;
