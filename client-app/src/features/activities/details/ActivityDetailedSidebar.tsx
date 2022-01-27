import React from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Avatar, Badge, BadgeProps, Box, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Activity } from '../../../app/models/activity'

interface Props {
    activity: Activity;
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: 0,
      top: -10,
      height: '2em',
      backgroundColor: 'gold',
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '8px',
    },
  }));

export default observer(function ActivityDetailedSidebar({activity: {attendees, host}}: Props) {
    if (!attendees) return null;
    return (
        <Paper>
            <Box
                textAlign='center'
                sx={{ border: 'none', backgroundColor: 'rgb(25, 118, 210)', height: '2em', borderRadius: '5px 5px 0 0' }}
                color='white'
            >
                <Typography variant={'h6'}>
                    {attendees.length} {attendees.length === 1 ? 'Person' : 'People'} going
                </Typography>
            </Box>
            <List component={Stack} dense>
                {attendees.map(attendee => (
                    <ListItem key={attendee.username} divider >
                        <ListItemAvatar>
                            <Avatar src={attendee.image} children={attendee.displayName.split('')[0].toUpperCase()}
                                variant='square' sx={{ height: '3em', width: '3em'}}/>
                        </ListItemAvatar>
                        <ListItemText>
                            <Box sx={{position: 'absolute', top: 0.5, pl: 1}}>
                                <Link to={`/profiles/${attendee.username}`} 
                                    children={<Typography variant='body1' children={attendee.displayName}/>}/>
                            </Box>
                            <Box sx={{position: 'absolute', top: 20, pl: 1.2}}>
                                {attendee.following && <Typography variant='body2' color={'orange'} sx={{fontWeight: 'bold'}}
                                    children={<>Following </>}/>}
                            </Box>
                        </ListItemText>
                        {attendee.username === host?.username && (
                            <StyledBadge 
                                badgeContent={
                                    <Typography variant='inherit' color={'blue'} fontSize={'12px'} children={'Host'} /> } >
                            </StyledBadge> 
                        )}
                    </ListItem>
                ))}
                
            </List>
        </Paper>

    )
})