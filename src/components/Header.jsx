import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #1e1e2e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 10px 20px;

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }

  nav ul {
    list-style: none;
    display: flex;
    gap: 15px;

    li a {
      text-decoration: none;
      color: #fff;
      padding: 5px 10px;
      border-radius: 5px;
      transition: background-color 0.3s;

      &:hover,
      &.active {
        color: aqua;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">Portfolio</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
