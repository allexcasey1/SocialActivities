import * as React from 'react';
import {AppBar, Box, Button, Toolbar, Typography, Menu, MenuItem, Avatar, Popover, ButtonBase, List, ListItem, Container} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { useStore } from '../stores/store';
import { ExpandMore, People } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';

const links: {name: string, to: string}[] = [
    {name: "Activities", to: "/activities"},
    {name: "Errors", to: "/errors"}
];
const buttons: {name: string, onClick: string}[] = [
    {name: "Create Activity", onClick: "/create"}
];

export default observer(function Nav() {
    const {userStore: {user, logout}} = useStore();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElPopover, setAnchorElPopover] = React.useState<HTMLButtonElement | null>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleClickPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorElPopover(event.currentTarget);
    };
    const handleClosePopover = () => {
      setAnchorElPopover(null);
    };

    const openPopover = Boolean(anchorElPopover);
    const id = openPopover ? 'simple-popover' : undefined;

    return (
        <AppBar id='AppBar' elevation={10} position="sticky">
            <Container>
            <Toolbar>

                {/* Brand */}
                <NavLink to="/" children={
                   <Typography
                       variant="h6"
                       noWrap
                       component="div"
                       sx={{ mr: 2, display: { xs: 'none', md: 'flex' }}}
                       children={
                           <>
                               <People /> Activities
                           </>
                       } /> 
                }/>
                
                {/* mobile nav menu */}
                <Box sx={{ 
                    flexGrow: 0, 
                    display: { xs: 'flex', md: 'none' }
                }}>
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
                            horizontal: 'left'}}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left'}}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' }}}>
                        {/* map links and buttons to mobile nav */}
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
                                className={'button createbutton hover'} 
                                key={button.name} 
                                variant='contained' 
                                onClick={handleCloseNavMenu}
                                children={
                                    <Typography variant='body2' children={button.name} />
                                } />
                        ))}
                    </Menu>
                    
                </Box>
                

                {/* brand for sm screens */}
                <Link to="/" children={
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                        children={'Activities'} />
                } />

                <Box sx={{ flexGrow: 0, display: { xs: 'block', md: 'none' }, width: '100%' }}>
                    <Box component={ButtonBase} onClick={handleClickPopover} sx={{ float: 'right' }}>
                        <Avatar src={user?.image} sizes='90' sx={{ mr: '5px'}}/>
                        <Typography variant='body2' fontSize={'1.6em'} my={2} sx={{ verticalAlign: 'middle'}} children={
                            user?.displayName
                        } />
                        <ExpandMore display={'inline'}/>
                    </Box>
                    

                    <Popover
                        id={id}
                        open={openPopover}
                        anchorEl={anchorElPopover}
                        onClose={handleClosePopover}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}>
                            <List>
                                <ListItem>
                                    <Button fullWidth component={Link} to={`/profiles/${user?.username}`} 
                                        children={'Profile'} />
                                </ListItem>
                                <ListItem>
                                    <Button fullWidth onClick={logout} component={Link} to={'/'} 
                                        children={'Logout'} />
                                </ListItem>
                            </List>
                        </Popover>
                </Box>
                    
                {/* dynamic routes for desktop view */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {links.map((link) => (
                        <Button
                            component={Link}
                            to={link.to}
                            key={link.name}
                            variant='text'
                            onClick={handleCloseNavMenu}
                            children={
                                <Typography variant='button' children={link.name} />
                            }
                        />
                           
                    ))}
                    {buttons.map((button) => (
                        <Button
                            className='button createbutton hover'
                            key={button.name}
                            component={NavLink}
                            to={button.onClick}
                            children={
                                button.name
                            }
                        />                                
                    ))}
                </Box>
                {/* dynamic buttons for desktop view */}
                <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                    <Box component={ButtonBase} onClick={handleClickPopover} >
                        <Avatar src={user?.image} sx={{ mr: '0.5em'}} />
                        <Typography variant='body2' fontSize={'1.6em'} my={2} sx={{ verticalAlign: 'middle'}} children={
                            user?.displayName
                        } />
                        <ExpandMore display={'inline'}/>
                    </Box>
                    

                    <Popover
                        id={id}
                        open={openPopover}
                        anchorEl={anchorElPopover}
                        onClose={handleClosePopover}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}>
                            <List>
                                <ListItem>
                                    <Button fullWidth component={Link} to={`/profiles/${user?.username}`} 
                                        children={'Profile'} />
                                </ListItem>
                                <ListItem>
                                    <Button fullWidth onClick={logout} component={Link} to={'/'} 
                                        children={'Logout'} />
                                </ListItem>
                            </List>
                        </Popover>
                </Box>
            </Toolbar>
            </Container>
        </AppBar>
    );
})
