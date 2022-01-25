import React from 'react';
import { observer } from 'mobx-react-lite';
import { Avatar, List, ListItem, Stack, Tooltip } from '@mui/material';
import { Profile } from '../../../app/models/profile';
import { Link } from 'react-router-dom';
import ProfileCard from '../../profiles/ProfileCard';

interface Props {
    attendees: Profile[]
}

export default observer(function ActivityListItemAttendee({attendees}: Props) {
    const styles = {
        borderColor: 'orange',
        borderWidth: 2
    }
   
    return (
        < List component={Stack} direction={'row'} sx={{ paddingLeft: 1 }}>
            
            {attendees.map(attendee => (
                
                    <ListItem key={attendee.username}                     
                        sx={{ width: 'auto', px: 0.5 }} 
                        children={
                            <Tooltip title={
                                <ProfileCard profile={attendee} />} 
                            >
                                <Avatar className='stateless-color' component={Link} 
                                    variant='circular'
                                    to={`/profiles/${attendee.username}`} 
                                    src={attendee.image}
                                    children={
                                        attendee.displayName.split('')[0].toUpperCase()
                                    }
                                    imgProps={{
                                        alt: 'follower',
                                        decoding: 'async'
                                    }}
                                    sx={{
                                        border: '2px solid gray',
                                        boxShadow: 'none',
                                        height: '50px',
                                        width: '50px' }} 
                                    style={attendee.following ? {...styles} : {}  }/>

                            </Tooltip>
                        } 
                    /> 

                
                
            ))}
        </List>
    )
})