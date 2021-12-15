import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import ActivitySelected from '../details/ActivitySelected';
import ActivityForm from '../form/ActivityForm';
// import ActivityForm from '../form/ActivityForm';
import ActivityStack from './ActivityStack';

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();    
    const {selectedActivity, editMode} = activityStore;

    return (
        <Grid container spacing={2} columns={18} >
            {/* Left column */}
            <Grid mt={2} item lg={10} md={10} sm={18} xs={18} >
                {/* Stack of Activities mapped to MUI Card component*/}
                <ActivityStack/>
            </Grid>
            {/* Right column */}
            <Grid 
                item 
                mt={2} lg={8} md={8} 
                display={{sm: 'none', md: 'inherit' }}
            >   
            {/* Display the selected activity */}
                {selectedActivity && 
                    !editMode &&
                <ActivitySelected/>}
            {/* Display edit form */}
                {editMode &&
                <ActivityForm/>}
                
            </Grid>
        </Grid>
    )
})

