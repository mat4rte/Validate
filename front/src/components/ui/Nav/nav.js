import React from "react";
import ButtonNavBar from "../buttonNavBar";
import Logo from "../logo";
import "./nav.css";

function Nav() {
  return (
    <>
      <div className="navbar flex justify-left mx-10 items-center mt-6 text-main font-medium font-main justify-around flex-wrap gap-20 max-lg:gap-4 text-base max-lg:text-xs">
        <div className="basis-1/3 shrink-0 grow">
          <Logo class="navbar-height" />
        </div>
        {/* <div className="nav-pages basis-2/3 flex justify-end gap-x-24 flex-wrap"> */}
        <div className="text-center hover:underline">
          <ButtonNavBar text="Calendar" url="/calendar" />
        </div>
        <div className="text-center">
          <ButtonNavBar text="Habits" url="/habit" />
        </div>
        <div className="text-center">
          <ButtonNavBar text="Tasks" url="/tasks" />
        </div>
        <div className="text-center">
          <ButtonNavBar text="Mata" url="/account" />
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Nav;
