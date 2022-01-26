import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';
import { UserActivity } from '../../app/models/profile';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Box } from '@mui/system';
import { Card, CardContent, CardHeader, CardMedia, CircularProgress, Grid, Paper, Tab, Tabs, Typography } from '@mui/material';

const panes = [
    {value: 'Future Events', index: 0, pane: { key: 'future'} },
    {value: 'Past Events', index: 1, pane: { key: 'past'} },
    {value: 'Hosting', index: 2, pane: { key: 'hosting'} }
]

// refactor into its own file
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
} 
function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default observer(function ProfileActivities() {
    const { profileStore } = useStore();
    const {
        loadUserActivities,
        profile,
        loadingActivities,
        userActivities
    } = profileStore;
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        loadUserActivities(profile!.username);
        }, [loadUserActivities, profile]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        profileStore.setEventTab(newValue);
        loadUserActivities(profile!.username, panes[newValue].pane.key);
    };

    return (
        <Box sx={{ width: '100%', marginTop: '2em' }}>
            <Box sx={{ borderBottom: 1, border: '1px solid gray', borderRadius: '5px', backgroundColor: 'lightsteelblue'}}>
                
                <Tabs value={value} onChange={handleChange} aria-label="profile panes" >
                    {panes.map(pane => (
                        <Tab key={pane.index} label={pane.value} {...a11yProps(pane.index)} value={pane.index}   />
                    ))}
                </Tabs>
                
            </Box>
            <Box>
                {panes.map(pane => (
                    <TabPanel key={pane.index} value={value} index={pane.index} >
                        <Grid container spacing={2} columns={12}>
                        {!loadingActivities && (
                            userActivities.map((activity: UserActivity) => (
                                <Grid key={activity.id} item >
                                    <Paper>
                                        <Card component={Link} to={`/activities/${activity.id}`} sx={{borderRadius: '0'}}>
                                            <CardMedia
                                                image={`/assets/categoryImages/${activity.category}.jpg`}
                                                component="img"
                                                height="100"
                                            />
                                            <CardHeader
                                                title={activity.title}
                                            />
                                            <CardContent>
                                                <div>{format(new Date(activity.date), 'do LLL')}</div>
                                                <div>{format(new Date(activity.date), 'h:mm a')}</div>
                                            </CardContent>
                                        </Card>
                                    </Paper>
                                </Grid>
                            )))}
                            <Grid item md={12} lg={12} xl={12} columns={12}>
                                <Box width={'100%'} sx={{ textAlign: 'center' }} >
                                    {loadingActivities && (<CircularProgress />)}
                                </Box>
                            </Grid>
                        </Grid>
                    </TabPanel>
                ))}
            </Box>
        </Box>
    )
})
    