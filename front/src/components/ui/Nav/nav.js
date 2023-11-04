import React from "react";
import ButtonNavBar from "../buttonNavBar";
import Logo from "../logo";
import "./nav.css";

function Nav() {
  return (
    <>
      <div className="navbar flex justify-left mx-10 items-center mt-6 text-main font-medium font-main justify-around flex-wrap gap-20 max-lg:gap-4 text-base max-lg:text-xs">
        <div className="basis-1/3 shrink-0 grow">
          <a href="/">
            <Logo class="navbar-height" />
          </a>
        </div>
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
      </div>
    </>
  );
}

export default Nav;
