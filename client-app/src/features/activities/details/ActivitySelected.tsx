import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { useStore } from "../../../app/stores/store";

export default function ActivitySelected() {
    const {activityStore} = useStore();
    const { selectedActivity, openForm, cancelSelectedActivity } = activityStore;

    return (
        <Card key={selectedActivity?.id} className={'sticky'} sx={{ height: 'fit-content', width: '100%' }}> 
            <CardHeader
                title={
                    <Typography variant="h6">
                        {selectedActivity?.title} 
                    </Typography>
                }
                subheader={
                    <Typography variant="subtitle1">
                        {selectedActivity?.date}
                    </Typography>
                }
                
            />
            <CardMedia
                component="img"
                image={`/assets/categoryImages/${selectedActivity?.category}.jpg`}
                alt="Paella dish"
            />
            <CardContent>
                <Typography 
                    variant="body1" 
                    sx={{ }}
                >
                    {selectedActivity?.venue} in {selectedActivity?.city}  
                </Typography>

                <Typography variant="body1">
                    {selectedActivity?.description}
                </Typography>
                <CardActions sx={{ float: 'right'}}>
                    <Button variant="contained" sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} onClick={() => openForm(selectedActivity?.id)}>
                        Edit
                    </Button>
                    <Button variant="contained" sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} onClick={() => cancelSelectedActivity()} >
                        Cancel
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
            
}