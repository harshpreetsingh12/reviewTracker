import React from "react";
import Small_logo from "../../assets/images/logo/logo-sm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  NavBarWrap,
  NavItem,
  pathIcons,
} from "./NavbarStylesData";
import StaticWall from "./UpperStaticWall";

const Navbar = () => {

  return (
    <header>
      <nav>
        <NavBarWrap className="fixed h-full w-20">
          <div>
            <img
              src={Small_logo}
              alt="ReviewTracker Logo"
              className="w-80 transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          </div>
          {pathIcons.map((element) => {
            return (
              <NavItem>
                <FontAwesomeIcon icon={element.icon} />
              </NavItem>
            );
          })}
        </NavBarWrap>

        <StaticWall/>
      </nav>
    </header>
  );
};

export default Navbar;
