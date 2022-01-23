import { Box, Button, Paper, Typography } from '@mui/material/';
import LoadingButton from '@mui/lab/LoadingButton';
import { useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from 'react-router-dom';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { categoryOptions } from '../../../app/common/options/categoryOptions';
import MyDateInput from '../../../app/common/form/MyDateInput';
import { ActivityFormValues } from '../../../app/models/activity';
import { format } from 'date-fns';

export default observer(function ActivityForm() {
    const navigate = useNavigate();
    const { activityStore } = useStore();
    const { createActivity, updateActivity, loadingInitial, loadActivity } = activityStore;
    const {id} = useParams<{id: string}>();

    const [activity, setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

    const validationSchema = Yup.object({
        title: Yup.string()
            .required('The activity title is required'),
        description: Yup.string()
            .required(),
        venue: Yup.string()
            .required(),
        category: Yup.string()
            .required(),
        city: Yup.string()
            .required(),
        date: Yup.string()
            .required("The date is required.")
            .nullable()
    })

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(new ActivityFormValues(activity)))
    }, [id, loadActivity])

    function handleFormSubmit(activity: ActivityFormValues) {
        if (!activity.id) {
            let newActivity = {
                ...activity,
                id: uuid()
            };
            createActivity(newActivity).then(() => navigate(`/activities/${newActivity.id}`))
        } else {
            updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
        }
    }

    if (loadingInitial) return <LoadingComponent message='Loading...'></LoadingComponent>
       
    return (
    <Paper >    
        <Formik 
            enableReinitialize 
            initialValues={activity} 
            validationSchema={validationSchema} 
            onSubmit={(values) => handleFormSubmit(values)}>
            {({handleSubmit, isValid, isSubmitting, dirty}) => (
            
                <Form onSubmit={handleSubmit} style={{ padding: '1em' }}>

                    <Typography variant='subtitle1' color='teal' px={1} pt={1} children={'Activity Details'}/>

                    <MyTextInput name='title' placeholder='Title' label='Title' 
                        helptext='Tell them what you want to do.' />

                    <MyDateInput 
                        placeholderText={format(new Date(), 'dd MMM yyyy h:mm aa')}
                        name='date' 
                        label='Date'
                        showTimeSelect
                        timeCaption='time'
                        dateFormat='MMMM d, yyyy h:mm aa'
                        helpertext="What day is your event?"/>

                    <MyTextArea name='description' placeholder='Description' label='Description' 
                        helptext='Help others know what you want to do.' 
                        rows={3} />

                    <MySelectInput name='category' placeholder='Category' label='Category' 
                        helptext='What type of event is this?' 
                        options={categoryOptions} />

                    <Typography variant='subtitle1' color='teal' px={1} pt={1} children={'Location Details'}/>

                    <MyTextInput name='city' placeholder='City' label='City'
                        helptext='What city is your event in?' />

                    <MyTextInput name='venue' placeholder='Venue' label='Venue'
                        helptext='Where will your event occur?' />
                    
                    <Box sx={{width: '100%', display: 'block', textAlign: 'right'}} >
                        <Button 
                            className='button cancelbutton hover'
                            component={Link} to="/activities" 
                            variant="contained" >
                                Cancel
                        </Button>
                        <LoadingButton 
                            className='button submitbutton hover'
                            disabled={isSubmitting || !dirty || !isValid}
                            loading={isSubmitting} variant="contained"
                            type='submit' >
                                Submit
                        </LoadingButton>
                    </Box>
                </Form>
            
            )} 
        </Formik>
        </Paper>
    )
})