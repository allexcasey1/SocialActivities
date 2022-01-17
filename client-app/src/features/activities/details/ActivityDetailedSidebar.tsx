import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'

export default observer(function ActivityDetailedSidebar () {
    return (
        <Paper>
            <Box
                textAlign='center'
                sx={{ border: 'none', backgroundColor: 'rgb(25, 118, 210)', height: '2em', borderRadius: '5px 5px / 5px 5px' }}
                color='white'
            >
                <Typography variant={'h6'}>
                    3 people going    
                </Typography>
            </Box>
            <Box>
                <List>
                    <ListItem sx={{ position: 'relative' }}>
                        <ListItemAvatar>
                            <Avatar>AC</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography variant='subtitle1'>
                                        <Link to={`#`}>Bob</Link>
                                    </Typography>
                                    {'following'}
                                </React.Fragment>
                            } />
                        
                    </ListItem>

                    <Divider />

                    <ListItem sx={{ position: 'relative' }}>
                        <ListItemAvatar>
                            <Avatar>AC</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography variant='subtitle1'>
                                        <Link to={`#`}>Bob</Link>
                                    </Typography>
                                    {'following'}
                                </React.Fragment>
                            } />
                        
                    </ListItem>

                    <Divider />

                    <ListItem sx={{ position: 'relative' }}>
                        <ListItemAvatar>
                            <Avatar>AC</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <React.Fragment>
                                    <Typography variant='subtitle1'>
                                        <Link to={`#`}>Bob</Link>
                                    </Typography>
                                    {'following'}
                                </React.Fragment>
                            } />
                        
                    </ListItem>

                </List>
            </Box>
        </Paper>

    )
})