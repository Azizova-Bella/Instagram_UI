import React from 'react';
import { NavLink } from 'react-router';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonIcon from '@mui/icons-material/Person';

import './navbarBut.css';

const BottomNavbar = () => {
  return (
    <div className="bottom-navbar">
      <NavLink to="/" className="nav-link" activeClassName="active-link">
        <HomeIcon />
      </NavLink>
      <NavLink to="/posts" className="nav-link" activeClassName="active-link">
        <ExploreIcon />
      </NavLink>
      <NavLink to="/reels" className="nav-link" activeClassName="active-link">
        <MovieIcon />
      </NavLink>
      <NavLink to="/create" className="nav-link" activeClassName="active-link">
        <AddBoxIcon />
      </NavLink>
      <NavLink to="/message" className="nav-link" activeClassName="active-link">
        <MailOutlineIcon />
      </NavLink>
      <NavLink to="/profile" className="nav-link" activeClassName="active-link">
        <PersonIcon />
      </NavLink>
    </div>
  );
};

export default BottomNavbar;
