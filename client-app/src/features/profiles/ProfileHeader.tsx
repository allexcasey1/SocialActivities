import { Avatar, Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Profile } from '../../app/models/profile';

interface Props {
    profile: Profile | undefined;
}


export default observer(function ProfileHeader({profile}: Props) {
const [following, setFollowing] = useState<boolean>(true);

    if (!profile) return null;

    return (
        <Paper sx={{ padding: '1em', marginTop: '2em' }}>

            <Grid container columns={14} spacing={2} display={'flex'} >

                <Grid item lg={2} md={2} sm={3} xs={3} flexGrow={1} sx={{ height: 'inherit' }} >

                    <Box sx={{ height: '100%', width: '100%' }}>
                        <Avatar variant='square' src={profile.image} sx={{width: '100%', height: 'auto', aspectRatio: '1/1', marginTop: 'auto', marginBottom: 'auto'}}
                            children={
                                <Typography variant='h1' sx={{ width: '100%'}}
                                    children={ profile.displayName.split('')[0]} />
                        } /> 
                    </Box>

                </Grid>

                <Grid 
                    item lg={7} md={7} sm={3} xs={3} flexGrow={0} sx={{ height: 'inherit' }} >

                    <Box display={'table'} sx={{ height: '100%' }}>
                        <Box component={'div'} display={'table-cell'} sx={{verticalAlign: 'middle' }}>
                            <Box display={'inline'}>
                                <Typography variant='h6' children={profile.displayName} />
                            </Box>
                        </Box>
                    </Box>

                </Grid> 

                <Grid item lg={5} md={5} sm={8} xs={8} sx={{  textAlign: 'center', height: 'inherit' }}  >
    
                    <Box display={'table'} sx={{height: '100%', width: '100%'}} >
                        <Box display={'table-cell'} sx={{ verticalAlign: 'middle' }} >

                            <Box display={'block'}>
                                <Box display={'inline-block'} px={2}>
                                    <Typography children={<><span style={{fontSize: '2rem'}}>5</span> <br/> FOLLOWERS <br /> </>} /> 
                                </Box>
                                <Box display={'inline-block'} px={2}>
                                    <Typography children={<><span style={{fontSize: '2rem'}}>40</span> <br /> FOLLOWING <br /> </>} />
                                </Box>
                            </Box>

                            <Box display={'block'} mx={'2em'}>
                                <Button 
                                    fullWidth variant='contained' 
                                    onClick={() => setFollowing(!following)}
                                    sx={following? { backgroundColor: 'green'} : { backgroundColor: 'gray'} } 
                                    className='button-isolated hover' 
                                >
                                    {following ? 'Following' : 'Follow'}
                                </Button>
                            </Box>

                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Paper>
    )
})

