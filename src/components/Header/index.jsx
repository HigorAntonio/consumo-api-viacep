import { useState } from "react";

import { NavLink } from "react-router";
import { IoMdMail, IoMdMailOpen } from "react-icons/io";

import HamburgerButton from "../HamburgerButton";

import "./Header.css";

function Header() {
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [isResponsiveNavActive, setIsResponsiveNavActive] = useState(false);

  function handleLogoMouseOver() {
    setIsHoveringLogo(true);
  }

  function handleLogoMouseOut() {
    setIsHoveringLogo(false);
  }

  function toggleResponsiveNavActive() {
    setIsResponsiveNavActive((prevState) => !prevState);
  }

  function closeResponsiveNav() {
    setIsResponsiveNavActive(false);
  }

  return (
    <header className="header-container">
      <div
        className="logo-container"
        onMouseOver={handleLogoMouseOver}
        onMouseOut={handleLogoMouseOut}
      >
        <NavLink to="/" onClick={closeResponsiveNav}>
          {isHoveringLogo ? <IoMdMailOpen /> : <IoMdMail />} AutoCEP
        </NavLink>
      </div>
      <HamburgerButton
        isActive={isResponsiveNavActive}
        onClick={toggleResponsiveNavActive}
      />
      <nav
        className={
          isResponsiveNavActive
            ? "navigation-container active"
            : "navigation-container"
        }
      >
        <ul className="navigation-list">
          <li>
            <NavLink
              to="/users/list"
              data-text="Usuários Cadastrados"
              onClick={closeResponsiveNav}
            >
              Usuários Cadastrados
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users/new"
              data-text="Novo Usuário"
              onClick={closeResponsiveNav}
            >
              Novo Usuário
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
