import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Activity } from "../../../app/models/activity";
interface Props {
    selectedActivity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}
export default function ActivitySelected({ selectedActivity, cancelSelectActivity, openForm }: Props) {

    return (
        <Card key={selectedActivity.id} className={'sticky'} sx={{ height: 'fit-content', width: '100%' }}> 
            <CardHeader
                title={
                    <Typography variant="h6">
                        {selectedActivity.title} 
                    </Typography>
                }
                subheader={
                    <Typography variant="subtitle1">
                        {returnDate(selectedActivity.date).toDateString()}
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
                    <Button variant="contained" sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} onClick={() => openForm(selectedActivity.id)}>
                        Edit
                    </Button>
                    <Button variant="contained" sx={{marginLeft: '.5em', marginRight: '.5em', float: 'right'}} onClick={cancelSelectActivity} >
                        Cancel
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
            
}

function returnDate(date: Date): any {
    return new Date(date);
}
