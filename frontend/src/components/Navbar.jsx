import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Reducers/theme';
import './Navbar.css';

const pages = ['Home', 'About', 'Services', 'Contact Us'];
const settings = ['Profile', 'Admin', 'Dashboard', 'Logout'];
const socialMedia = [
  { name: 'Facebook', link: 'https://www.facebook.com' },
  { name: 'Instagram', link: 'https://www.instagram.com' },
  { name: 'Twitter', link: 'https://www.twitter.com' },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElAbout, setAnchorElAbout] = useState(null);
  const [anchorElSocial, setAnchorElSocial] = useState(null);

  const handleOpenSocialMenu = (event) => {
    setAnchorElSocial(event.currentTarget);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenAboutMenu = (event) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseAboutMenu = () => {
    setAnchorElAbout(null);
  };

  const handleCloseSocialMenu = () => {
    setAnchorElSocial(null);
  };

  const dispatch = useDispatch();
  let darkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect((e) => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', darkMode);
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', darkMode);
    }
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            <img style={{ width: '100px', height: '50px' }} src="./Logo.png" alt="Logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', lg: 'none' },
              }}
            >  
            {pages.map((page) =>
              page === 'About' ? (
                <div key={page}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                  <Menu
                    id="about-menu"
                    anchorEl={anchorElSocial}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElSocial)}
                    onClose={handleCloseSocialMenu}
                  >
                    {socialMedia.map((social) => (
                      <MenuItem key={social.name} onClick={handleCloseAboutMenu}>
                        <Typography
                          textAlign="center"
                          component="a"
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          {social.name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ) : (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography  component="a" href={`/${page}`} textAlign="center">{page}</Typography>
                </MenuItem>
              )
            )}
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              width: 'fit-content',
            }}
          >
            <img style={{ width: '100px', height: '50px' }} src="./Logo.png" alt="Logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) =>
              page === 'About' ? (
                <div key={page}>
                  <Button
                    onClick={handleOpenAboutMenu}
                    key={page}

                    sx={{ mx: 3, my: -2, color: 'black', display: 'block', fontWeight: 'bold', width: 'fit-content' }}
                  >
                    {page}
                  </Button>
                  <Menu
                    id="about-menu"
                    anchorEl={anchorElAbout}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElAbout)}
                    onClose={handleCloseAboutMenu}
                  >
                    {socialMedia.map((social) => (
                      <MenuItem key={social.name} onClick={handleCloseAboutMenu}>
                        <Typography
                          textAlign="center"
                          component="a"
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          {social.name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ) : (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ mx: 3, my: -2, color: 'black', display: 'block', fontWeight: 'bold', width: 'fit-content' }}
                >
                  {page}
                </Button>
              )
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Toggle theme">
              <IconButton onClick={() => dispatch(toggleTheme())} sx={{ p: 0, mr: 2 }}>
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Admin">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/user.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;