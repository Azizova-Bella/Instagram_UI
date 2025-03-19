import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MovieIcon from '@mui/icons-material/Movie';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ReportIcon from '@mui/icons-material/Report';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import LogoutIcon from '@mui/icons-material/Logout';

import logo from '../../shared/assets/logo.png';
import SearchModal from '../../pages/modalSeach/search';
import NotificationsModal from '../../pages/notifications/Notifications';
import BottomNavbar from './buttomNavbar'

const Layout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width:768px)');

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#fff',
    borderRadius: '12px',
    fontWeight: 500,
    fontSize: '16px',
    transition: 'background-color 0.3s ease'
  };

  const activeStyle = {
    backgroundColor: '#262626',
    fontWeight: 600
  };

  const renderNavItems = () => (
    <>
      <ListItem
        component={NavLink}
        to="/"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        <HomeIcon /> <span>Home</span>
      </ListItem>
      <ListItem button onClick={() => setIsSearchOpen(true)} style={linkStyle}>
        <SearchIcon /> <span>Search</span>
      </ListItem>
      <ListItem
        component={NavLink}
        to="/posts"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        <ExploreIcon /> <span>Explore</span>
      </ListItem>
      <ListItem
        component={NavLink}
        to="/reels"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        <MovieIcon /> <span>Reels</span>
      </ListItem>
      <ListItem
        component={NavLink}
        to="/message"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        <MailOutlineIcon /> <span>Messages</span>
      </ListItem>
      <ListItem button onClick={() => setOpenNotif(true)} style={linkStyle}>
        <FavoriteBorderIcon /> <span>Notifications</span>
      </ListItem>
      <ListItem
        component={NavLink}
        to="/create"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        <AddBoxIcon /> <span>Create</span>
      </ListItem>
      <ListItem
        component={NavLink}
        to="/profile"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        <PersonIcon /> <span>Profile</span>
      </ListItem>
      <ListItem
        component={NavLink}
        to="/settings"
        style={({ isActive }) => (isActive ? { ...linkStyle, ...activeStyle } : linkStyle)}
      >
        <SettingsIcon /> <span>Settings</span>
      </ListItem>
      <ListItem button onClick={() => setIsMoreOpen(true)} style={linkStyle}>
        <MenuIcon /> <span>More</span>
      </ListItem>
    </>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside
          style={{
            width: '240px',
            backgroundColor: '#000',
            borderRight: '1px solid #333',
            padding: '24px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div style={{ marginBottom: '16px', paddingLeft: '12px' }}>
            <img src={logo} alt="Logo" style={{ width: '120px' }} />
          </div>
          <List>{renderNavItems()}</List>
        </aside>
      )}

      {/* Mobile Topbar */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 16px',
            zIndex: 1000,
          }}
        >
          <img src={logo} alt="Logo" style={{ width: '100px' }} />
          <IconButton onClick={() => setIsDrawerOpen(true)} sx={{ color: 'white' }}>
            <MenuIcon />
          </IconButton>
        </div>
      )}

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          style: {
            backgroundColor: '#000',
            color: '#fff',
            width: '220px',
            padding: '20px',
          },
        }}
      >
        <List>{renderNavItems()}</List>
      </Drawer>

      <main
        style={{
          flexGrow: 1,
          backgroundColor: '#fff',
          color: '#000',
          paddingTop: isMobile ? '60px' : '0',
        }}
      >
        <Outlet />
      </main>

      <SearchModal open={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <NotificationsModal open={openNotif} onClose={() => setOpenNotif(false)} />

		<Dialog
  open={isMoreOpen}
  onClose={() => setIsMoreOpen(false)}
  PaperProps={{
    style: {
      backgroundColor: '#000',
      color: '#fff',
      width: '240px',
      borderRadius: '10px',
      padding: '16px',
      position: 'fixed',
      left: 55,
      bottom: 100,
      margin: 0,
    },
  }}
>

        <DialogTitle style={{ fontSize: '18px' }}>Options</DialogTitle>
        <DialogContent>
          <List>
            <ListItem button>
              <ListItemIcon sx={{ color: '#fff' }}>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ color: '#fff' }}>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary="Saved" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ color: '#fff' }}>
                <Brightness4Icon />
              </ListItemIcon>
              <ListItemText primary="Switch Appearance" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ color: '#fff' }}>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Report a problem" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ color: '#fff' }}>
                <SwitchAccountIcon />
              </ListItemIcon>
              <ListItemText primary="Switch accounts" />
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ color: '#fff' }}>
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
		{isMobile && <BottomNavbar />}

    </div>
  );
};

export default Layout;
