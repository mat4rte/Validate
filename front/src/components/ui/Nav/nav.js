import React from "react";
import Button from "../button";
import Logo from "../logo";
import "./nav.css";

function Nav() {
  return (
    <>
      <div className="navbar flex justify-left mx-10 mt-6">
        <div className="basis-1/3 shrink-0">
          <Logo class="navbar-height" />
        </div>
        <div className="nav-pages basis-2/3 flex justify-end">
          <div className="text-center basis-1/6">
            <Button text="Calendar" url="/calendar" />
          </div>
          <div className="text-center basis-1/6">
            <Button text="Habits" url="/habit" />
          </div>
          <div className="text-center basis-1/6">
            <Button text="Tasks" url="/task" />
          </div>
          <div className="text-center basis-1/6">
            <Button text="Mata" url="/account" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
