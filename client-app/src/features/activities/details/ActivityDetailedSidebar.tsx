import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Avatar, Badge, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import { Star } from '@mui/icons-material'

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
                        <ListItemText>
                            <Link to={`#`} children={<Typography variant='subtitle1' children={'Bob'}/>}/>
                            {'following'}
                        </ListItemText>

                        <Badge badgeContent={'host'} sx={{ verticalAlign: 'middle' }} >
                            <Star sx={{fontSize: '2em', color: 'orange' }}/>
                        </Badge>
                        
                    </ListItem>

                    <Divider />

                    <ListItem sx={{ position: 'relative' }}>
                        <ListItemAvatar>
                            <Avatar>AC</Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            <Link to={`#`} children={<Typography variant='subtitle1' children={'Bob'}/>}/>
                            {'following'}
                        </ListItemText>
                        
                    </ListItem>

                    <Divider />

                    <ListItem sx={{ position: 'relative' }}>
                        <ListItemAvatar>
                            <Avatar>AC</Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            <Link to={`#`} children={<Typography variant='subtitle1' children={'Bob'}/>}/>
                            {'following'}
                        </ListItemText>
                        
                    </ListItem>

                </List>
            </Box>
        </Paper>

    )
})