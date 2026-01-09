import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Shipping Box</div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to={ROUTES.ADD_BOX}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Add Box
          </NavLink>
        </li>
        <li>
          <NavLink
            to={ROUTES.BOX_LIST}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Box List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
