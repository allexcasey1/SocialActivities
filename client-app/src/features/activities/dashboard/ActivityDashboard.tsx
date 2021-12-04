import { Grid } from '@mui/material';
import { Activity } from '../../../app/models/activity';
import ActivitySelected from '../details/ActivitySelected';
import ActivityForm from '../form/ActivityForm';
// import ActivityForm from '../form/ActivityForm';
import ActivityStack from './ActivityStack';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    editMode: boolean;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEditActivity: (activity: Activity) => void;
    deleteActivity: (activity: Activity) => void;
}

export default function ActivityDashboard({activities, selectedActivity, editMode, 
    selectActivity, cancelSelectActivity, openForm, closeForm, createOrEditActivity, deleteActivity}: Props) {
        
    return (
        <Grid container spacing={2} columns={18} >
            <Grid mt={2} item lg={10} md={10} sm={18} xs={18} >
                <ActivityStack activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
            </Grid>
            <Grid mt={2} item lg={8} md={8} display={{sm: 'none', md: 'inherit' }}>
                {selectedActivity && !editMode &&
                <ActivitySelected selectedActivity={selectedActivity} cancelSelectActivity={cancelSelectActivity} openForm={openForm} />}
                {editMode &&
                <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEditActivity={createOrEditActivity}></ActivityForm>}
            </Grid>
        </Grid>
    )
}

