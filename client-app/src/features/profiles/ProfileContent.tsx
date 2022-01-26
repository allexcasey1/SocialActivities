import { Box, Paper, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { Profile } from '../../app/models/profile';
import { useStore } from '../../app/stores/store';
import ProfileAbout from './ProfileAbout';
import ProfileActivities from './ProfileActivities';
import ProfileFollowings from './ProfileFollowings';
import ProfilePhotos from './ProfilePhotos';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface Props {
  profile: Profile;
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

export default function ProfileContent({profile}: Props) {

    const panes = [
        {value: 'About', index: 0, render: () => <Box><ProfileAbout /></Box>},
        {value: 'Photos', index: 1, render: () => <Box><ProfilePhotos profile={profile} /></Box>},
        {value: 'Events', index: 2, render: () => <ProfileActivities />},
        {value: 'Followers', index: 3, render: () => <Box><ProfileFollowings /></Box>},
        {value: 'Following', index: 4, render: () => <Box><ProfileFollowings /></Box>},
    ]

    const {profileStore} = useStore();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        profileStore.setActiveTab(newValue);
    };
    return (
        <Paper sx={{ marginTop: '2em'}}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    
                    <Tabs value={value} onChange={handleChange} aria-label="profile panes" >
                        {panes.map(pane => (
                            <Tab key={pane.index} label={pane.value} {...a11yProps(pane.index)} value={pane.index}   />
                        ))}
                    </Tabs>
                    
                </Box>
                <Box>
                    {panes.map(pane => (
                        <TabPanel key={pane.index} value={value} index={pane.index} >
                          
                          {pane.render()}
                        </TabPanel>
                           
                    ))}
                </Box>
                    
            </Box>
        </Paper>
    )
}