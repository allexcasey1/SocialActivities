import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, OutlinedInput, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Loader } from 'semantic-ui-react';
import { formatDistanceToNow } from 'date-fns';

interface Props {
    activityId: string;
}

export default observer(function ActivityDetailedChat({activityId}: Props) {
    const {commentStore} = useStore();

    useEffect(() => {
        if (activityId) {
            commentStore.createHubConnection(activityId);
        }
        return () => {
            commentStore.clearComments();
        }
    }, [commentStore, activityId])

    return (
        <Paper sx={{ backgroundColor: 'white', width: '100%', borderRadius: '5px 5px / 5px 5px'}}>
            <Box textAlign={'center'} sx={{ backgroundColor: 'rgb(25, 118, 210)', height: '2em', borderRadius: '5px 5px / 5px 5px' }}>
                <Typography variant={'h5'} sx={{ verticalAlign: 'middle', color: 'white' }}>Chat</Typography>  
            </Box>


            <Formik
                onSubmit={(values, {resetForm}) => 
                    commentStore.addComment(values).then(() => resetForm())}
                initialValues={{body: ''}}
                validationSchema={Yup.object({
                    body: Yup.string().required()
                })}
                >
                    {({isSubmitting, isValid, handleSubmit}) => (
                        <Form className='form'>
                            <Field 
                                name='body'
                            >
                                {(props: FieldProps) => (
                                    <Box>
                                        <Loader active={isSubmitting} />
                                        <Box sx={{width: '100%'}}>
                                            <OutlinedInput
                                                fullWidth
                                                inputComponent={'textarea'}
                                                placeholder='Enter your comment (Enter to submit, SHIFT + Enter for new line)'
                                                rows={3}
                                                sx={{ border: '1px solid gray', borderRadius: '5px', margin: '10px 3%', width: '94%'}}
                                                {...props.field}
                                                onKeyPress={e => {
                                                    if (e.key === 'Enter' && e.shiftKey) {
                                                        return;
                                                    }
                                                    if (e.key === 'Enter' && !e.shiftKey) {
                                                        e.preventDefault();
                                                        isValid && handleSubmit();
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                )}
                            </Field>
                            {/* <Box width={'auto'} mx={2} py={2}>
                                <MyTextAreaContained placeholder={'Add comment'} name={'body'} rows={2} />
                            </Box>
                            <LoadingButton 
                                fullWidth 
                                loading={isSubmitting} disabled={isSubmitting || !isValid}
                                children={
                                    <><Edit /> 'Add Reply'</> } 
                                type='submit'
                            /> */}
                        </Form>
                    )}

            </Formik>

            <List >
                {commentStore.comments.map(comment => (
                    <ListItem key={comment.id}>

                        <ListItemAvatar children={
                            <Avatar variant='square' src={comment.image} children={comment.displayName[0]}/>
                        }/>
                           

                        <ListItemText
                            primary={

                                <React.Fragment>

                                    <Link
                                        to={`/profiles/${comment.username}`}
                                        children={
                                            <Typography variant='subtitle1' children={comment.displayName} 
                                                sx={{ display: 'inline-block', fontWeight: 'bold' }} />}
                                    />
                                            
                                    <Typography
                                        sx={{ display: 'inline-block', ml: 0.75}}
                                        component={'span'}
                                        variant='subtitle2'
                                        color={'text.secondary'}
                                        children={formatDistanceToNow(comment.createdAt) + ' ago'}
                                    />
                                          

                                </React.Fragment>
                            }
                            secondary={
                                
                                <React.Fragment>

                                    <Typography
                                        sx={{ display: 'inline', whiteSpace: 'pre-wrap' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                        children={comment.body}
                                    />
                                            
                                </React.Fragment>
                            }
                            sx={{ padding: 0, mb: 0}}
                        />
                    </ListItem>
                ))}
                      
            </List>

            

            

        </Paper>
    )
})