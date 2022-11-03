/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "@/assets/images/logo.svg";
import "./navbar.sass";
import Drawer from "@/design-system/molecules/drawer/Drawer";
import Icon from "@/design-system/atoms/icon/Icon";
import { capitalize } from "@/utils";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const content = [
    { name: "home", url: "/home" },
    { name: "new", url: "/new" },
    { name: "popular", url: "/popular" },
    { name: "trending", url: "/trending" },
    { name: "categories", url: "/categories" },
  ];
  return (
    <nav data-testid="navbar" className="navbar">
      <div className="navbar-mobile">
        <div className="left">
          <span className="logo">
            <NavLink to="/" aria-label="go to home">
              <Icon
                src={<Logo />}
                name="logo"
                size={{ height: "40px", width: "40px" }}
              />
            </NavLink>
          </span>
        </div>

        <div className="right">
          <Drawer position="right" content={content} />
        </div>
      </div>
      <div className="navbar">
        <span className="left">
          <span className="logo">
            <NavLink to="/" aria-label="go to home">
              <Logo />
            </NavLink>
          </span>
          <span className="menu">
            {content.map((item) => (
              <NavLink to={item.url} className="menu-item" key={item.url}>
                {capitalize(item.name)}
              </NavLink>
            ))}
          </span>
        </span>
        <span className="right">
          <div className="avatar"></div>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
