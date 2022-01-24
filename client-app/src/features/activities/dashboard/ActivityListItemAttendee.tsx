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
                                    to={`/profiles/${attendee.username}`} 
                                    src={attendee.image}
                                    children={
                                        attendee.displayName.split('')[0].toUpperCase()
                                    } />
                            </Tooltip>
                        } 
                    /> 

                
                
            ))}
        </List>
    )
})