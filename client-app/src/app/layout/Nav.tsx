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
import { Link, NavLink } from 'react-router-dom';
import { useStore } from '../stores/store';
import { People } from '@mui/icons-material';

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
                            <People /> Activities
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
                            children={
                                <MenuIcon />
                            }
                        />
                            

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
                                    <NavLink to={link.to} children={
                                        <Typography sx={{textAlign: 'left', margin: 'auto auto auto 0'}} children={
                                            link.name
                                        } />
                                    }/>
                                </MenuItem>
                            ))}
                            {buttons.map((button) => (
                                <Button 
                                    component={NavLink}
                                    to={button.onClick} 
                                    key={button.name} 
                                    variant='contained'
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 1, mx: 2, display: 'inline-block' }}
                                    children={
                                        <Typography variant='button' children={
                                            button.name
                                        } />
                                    }
                                />
                            ))}
                        </Menu>
                    </Box>
                    {/* brand for sm screens */}
                    <Link to="/" children={
                        <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        children={'Activities'} />
                    } />
                        
                    {/* dynamic endpoints for desktop view */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {links.map((link) => (
                            <Button
                                component={Link}
                                to={link.to}
                                key={link.name}
                                variant='text'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                                children={
                                    <Typography variant='button' children={link.name} />
                                }
                            />
                               
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {buttons.map((button) => (
                            <Button
                                key={button.name}
                                component={NavLink}
                                to={button.onClick}
                                variant='contained'
                                sx={{ 
                                    my: 1, 
                                    mx: 5, 
                                    display: 'block', 
                                    float: 'right'
                                }}
                                children={
                                    button.name
                                }
                                
                            />                                
                        ))}
                    </Box>
                </Toolbar>
        </AppBar>
    );
};
export default Nav;