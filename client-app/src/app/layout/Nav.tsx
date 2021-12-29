import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useStore } from '../stores/store';

const Nav = () => {
    const {activityStore} = useStore();
    const {links, buttons} = activityStore;
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar id='AppBar' elevation={10} position="sticky" sx={{ marginLeft: '-5px', marginRight: '-5px'}}>
                <Toolbar >
                    {/* Brand */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
                    >
                        <NavLink to="/">
                            SocialActivities
                        </NavLink>
                    </Typography>
                    {/* inputs for mobile view */}
                    <Box sx={{ 
                        flexGrow: 0, 
                        display: { xs: 'flex', md: 'none' }
                    }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu }
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
                                display: { xs: 'block', md: 'none' },
                                width: '100%'
                          }}
                        >
                            {/* map pages and buttons to nav */}
                            {links.map((link) => (
                                <MenuItem key={link.name} onClick={handleCloseNavMenu}>
                                  
                                    <Typography sx={{textAlign: 'left', margin: 'auto auto auto 0'}}>
                                        <NavLink to={link.to}>
                                            {link.name}
                                        </NavLink>
                                    </Typography>
                                  
                                </MenuItem>
                            ))}
                            {buttons.map((button) => (
                                <Button 
                                    key={button.name} 
                                    variant='outlined'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 0.5, mx: 2, display: 'block' }}
                                >
                                    <Typography sx={{textAlign: 'left', margin: 'auto auto auto 0'}}>
                                        <NavLink to={button.onClick}>
                                            {button.name}
                                        </NavLink>
                                    </Typography>
                                </Button>
                            ))}
                        </Menu>
                    </Box>
                    {/* brand for sm screens */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        SocialActivities
                    </Typography>
                    {/* dynamic endpoints for desktop view */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {links.map((link) => (
                            <Button
                                key={link.name}
                                variant='text'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                            >
                                <Typography sx={{textAlign: 'left', margin: 'auto auto auto 0'}}>
                                    <NavLink to={link.to}>
                                        {link.name}
                                    </NavLink>
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {buttons.map((button) => (
                            <Button
                                key={button.name}
                                variant='contained'
                                sx={{ 
                                    my: 2, 
                                    mx: 2, 
                                    display: 'block', 
                                    float: 'right'
                                }}
                                
                            >
                                <NavLink to={button.onClick}>
                                <Typography variant="button">
                                       {button.name} 
                                </Typography>
                                </NavLink>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
        </AppBar>
    );
};
export default Nav;