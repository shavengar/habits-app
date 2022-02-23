import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <NavLink to="login">Login</NavLink>
            <NavLink to="profile">Profile</NavLink>
            <NavLink to="create">Create Challenge</NavLink>
            <NavLink to="challenge">Challenge</NavLink>
            <NavLink to="history">History</NavLink>
            <NavLink to="museum">Museum</NavLink>
            <NavLink to="friends">Friends</NavLink>
        </nav>
    );
};

export default Menu;
