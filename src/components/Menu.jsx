import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "link")}
                to="login"
            >
                Login
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "link")}
                to="challenge"
            >
                Challenge
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "link")}
                to="history"
            >
                History
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "link")}
                to="museum"
            >
                Museum
            </NavLink>
            <NavLink
                className={({ isActive }) => (isActive ? "activeLink" : "link")}
                to="logout"
            >
                Logout
            </NavLink>
        </nav>
    );
};

export default Menu;
