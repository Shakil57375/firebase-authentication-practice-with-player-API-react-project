import React from 'react';
import './ActiveNavLink.css'
import { NavLink } from 'react-router-dom';
const ActiveNavLink = ({to, children}) => {
    return (
        <NavLink
          to={to}
          className={({ isActive }) =>  isActive ? "active" : ""}
        >
            {children}
        </NavLink>
    );
};

export default ActiveNavLink;