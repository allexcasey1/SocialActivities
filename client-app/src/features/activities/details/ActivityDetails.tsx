import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityDetails() {
    const {activityStore} = useStore();
    const { selectedActivity, loadActivity, loadingInitial } = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !selectedActivity) return <LoadingComponent />;

    return (
        // used for activity details page
        <Card key={selectedActivity.id} className={'sticky'} sx={{ height: 'fit-content', width: '100%', marginTop: '1em', paddingBottom: '1em'}}> 
            <CardHeader
                title={
                    <Typography variant="h6">
                        {selectedActivity.title} 
                    </Typography>
                }
                subheader={
                    <Typography variant="subtitle1">
                        {selectedActivity.date}
                    </Typography>
                }
                
            />
            <CardMedia
                component="img"
                image={`/assets/categoryImages/${selectedActivity.category}.jpg`}
                alt="Paella dish"
            />
            <CardContent>
                <Typography 
                    variant="body1" 
                    sx={{ }}
                >
                    {selectedActivity.venue} in {selectedActivity.city}  
                </Typography>

                <Typography variant="body1">
                    {selectedActivity.description}
                </Typography>
                <CardActions sx={{ float: 'right'}}>
                    <Link to={`/activities/manage/${selectedActivity.id}`}>
                        <Button variant="contained" sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} >
                            Edit
                        </Button>
                    </Link>
                    
                    <Link to="/activities/list">
                        <Button variant="contained" sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} >
                            Cancel
                        </Button>
                    </Link>
                </CardActions>
            </CardContent>
        </Card>
    )
            
})