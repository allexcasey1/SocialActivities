import { Activity } from "../../../app/models/activity";
import { Box, Button, FormControl, FormHelperText, Input, InputLabel, Paper } from '@mui/material/';
import { ChangeEvent, useState } from "react";

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEditActivity: (activity: Activity) => void;
}

  
export default function ActivityForm({activity: selectedActivity, closeForm, createOrEditActivity}: Props) {
    const initialState = selectedActivity ?? 
    {
        id: '',
        title: '',
        category: '',
        description: '',
        date: new Date(),
        city: '', 
        venue: ''
    }
    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        console.log(activity);
        createOrEditActivity(activity)
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }
       
    return (
        <Paper 
            className={'sticky'}
            elevation={1}
            sx={{
                backgroundColor: '#FFFFFF',
                height: 'fit-content',
                padding: '2em',
            }}>
        <Box
            component="form"
            id='activity-form'
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}>
            
            {/*Title*/}
            <FormControl variant='standard' size='medium' fullWidth>
                <InputLabel htmlFor="activity-title">Title</InputLabel>
                <Input 
                    id="activity-title" 
                    aria-describedby="title-helper-text" 
                    value={activity.title}
                    name="title"
                    onChange={handleInputChange} />
                <FormHelperText id="title-helper-text">You got this.</FormHelperText>
            </FormControl>
            {/*Date*/}
            <FormControl variant='standard' size='medium' fullWidth>
                <InputLabel htmlFor="activity-date">Date</InputLabel>
                <Input 
                    id="activity-date" 
                    aria-describedby="date-helper-text" 
                    value={activity.date}
                    name="date"
                    onChange={handleInputChange}
                    type="datetime" />
                <FormHelperText id="title-helper-date">You got this.</FormHelperText>
            </FormControl>
            {/* Description */}
            <FormControl variant='standard' size='medium' fullWidth>
                <InputLabel htmlFor="activity-description">Description</InputLabel>
                <Input
                    id="activity-description" 
                    name="description"
                    aria-describedby="description-helper-text"
                    value={activity.description}
                    onChange={handleInputChange}
                    multiline 
                    rows={3}
                    />
                <FormHelperText id="description-helper-text">150 characters max! jk.</FormHelperText>
            </FormControl>
            {/* Venue */}
            <FormControl variant='standard' size='medium' fullWidth >
                <InputLabel htmlFor="activity-venue">Venue</InputLabel>
                <Input 
                    id="activity-venue" 
                    name="venue"
                    aria-describedby="venue-helper-text" 
                    value={activity.venue}
                    onChange={handleInputChange}/>
                <FormHelperText id="venue-helper-text">Can't help you here</FormHelperText>
            </FormControl>
            {/* City */}
            <FormControl variant='standard' size='medium' fullWidth >
                <InputLabel htmlFor="activity-city">City</InputLabel>
                <Input 
                    id="activity-city" 
                    name="city"
                    aria-describedby="city-helper-text"
                    value={activity.city}
                    onChange={handleInputChange}/>
                <FormHelperText id="city-helper-text">'Let's have this event in Tucson', said nobody</FormHelperText>
            </FormControl>
            {/* Category */}
            <FormControl variant='standard' size='medium' fullWidth >
                <InputLabel htmlFor="activity-category">Category</InputLabel>
                <Input 
                    id="activity-category" 
                    name="category"
                    aria-describedby="category-helper-text" 
                    value={activity.category}
                    onChange={handleInputChange}/>
                <FormHelperText id="category-helper-text">Is eating 20 tacos a sport?</FormHelperText>
            </FormControl>

            <Button variant="contained" sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} onClick={handleSubmit}>
                Submit
            </Button>
            <Button variant="contained" sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} onClick={closeForm}>
                Cancel
            </Button>
        </Box>
        </Paper>
    )
}