import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

interface chatItem {
    userName: string;
    date: Date;
    message: string;
}
const tempChatService: chatItem[] = [
    {userName: 'Alex C.', date: new Date(), message: 'Def will be there!'},
    {userName: 'Alex C.', date: new Date(), message: 'Def will be there!'}
]
export default function ActivityDetailedChat() {
    function printDate(date: Date): string {
        return `${date.getMonth() + 1}/${date.getDay()}/${date.getFullYear()}`
    }

    return (
        <Paper sx={{ backgroundColor: 'white', width: '100%', borderRadius: '5px 5px / 5px 5px'}}>
            <Box textAlign={'center'} sx={{ backgroundColor: 'rgb(25, 118, 210)', height: '2em', borderRadius: '5px 5px / 5px 5px' }}>
                <Typography variant={'h5'} sx={{ verticalAlign: 'middle', color: 'white' }}>Chat</Typography>  
            </Box>

            <List >
                <ListItem>
                    <ListItemAvatar>
                       <Avatar> AC </ Avatar> 
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline', fontWeight: 'bold' }}
                                    component={'span'}
                                    variant='subtitle1'
                                    color={'text.primary'}
                                    >
                                        {tempChatService[0].userName}
                                    </Typography>
                                <Typography
                                    sx={{ display: 'inline'}}
                                    component={'span'}
                                    variant='subtitle2'
                                    color={'text.secondary'}
                                    >
                                       {printDate(tempChatService[0].date)} 
                                    </Typography>
                                    
                            </React.Fragment>
                            }
                        secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                >
                                    {tempChatService[0].message}
                                </Typography>
                                    
                        </React.Fragment>
                      }
                    />
                </ListItem>      
            </List>

            <Box width={'auto'} mx={2} py={2}>
                <TextField multiline minRows={3} maxRows={6} fullWidth />
            </Box>

        </Paper>
    )
}