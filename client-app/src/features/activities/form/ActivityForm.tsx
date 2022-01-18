import { Box, Button, FormControl, FormHelperText, Grid, Input, InputLabel, Paper } from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { v4 as uuid } from 'uuid';

export default observer(function ActivityForm() {
    const navigate = useNavigate();
    const { activityStore } = useStore();
    const { createActivity, updateActivity, loading, loadingInitial, loadActivity } = activityStore;
    const {id} = useParams<{id: string}>();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '1993-03-03',
        city: '', 
        venue: '' 
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity])

    function handleSubmit() {
        if (activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity).then(() => navigate(`/activities/${newActivity.id}`))
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    if (loadingInitial) return <LoadingComponent message='Loading...'></LoadingComponent>
       
    return (
            <Grid container columns={16}>
                <Grid item sm={2} md={4} lg={5} />

                <Grid item sm={12} md={8} lg={6} > 

                    <Paper sx={{my: '5em'}}>
                        <Box
                            component="form"
                            id='activity-form'
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                            sx={{
                                padding: '2em 2em 4em 2em'
                            }}>
                            
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
                                    type="date" />
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

                            {/* Cancel and Submit buttons */}
                            <Box sx={{width: 'auto', float: 'right'}} >
                                <LoadingButton loading={loading} variant="contained" onClick={handleSubmit} sx={{marginLeft: '.5em', marginRight: '.5em'}} >
                                    <Link to="/activities">
                                        Submit
                                    </Link>
                                </LoadingButton>
                                <Button variant="contained" sx={{marginLeft: '.5em', marginRight: '.5em'}} >
                                    <Link to="/activities">
                                        Cancel
                                    </Link>
                                </Button>
                            </Box>

                        </Box>
                    </Paper>
                </Grid>

                <Grid item sm={2} md={4} lg={5}  />

            </Grid>
            
            
    )
})