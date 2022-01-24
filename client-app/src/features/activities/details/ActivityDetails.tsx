import { Box, Container, Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";

export default observer(function ActivityDetails() {
    const {activityStore} = useStore();
    const { selectedActivity, loadActivity, loadingInitial, clearSelectedActivity } = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadActivity(id);
        return () => clearSelectedActivity();
    }, [id, loadActivity, clearSelectedActivity]);

    if (loadingInitial || !selectedActivity) return <LoadingComponent />;

    return (
        <Container>
            <Grid container columns={18} mb={4} spacing={4}>
                <Grid item lg={12} md={16} sm={18} mt={2}>

                    {selectedActivity &&
                    <Box>
                        <Box mt={2}>
                            <ActivityDetailedHeader />
                        </Box>
                        <Box mt={2}>
                            <ActivityDetailedInfo />
                        </Box>
                        <Box mt={2}>
                            <ActivityDetailedChat activityId={selectedActivity.id} /> 
                        </Box>
                    </Box>
                    }
                </Grid>
                <Grid item lg={6} md={16} sm={18} xs={18} mt={2}>
                    <Box mt={2}>
                       <ActivityDetailedSidebar activity={selectedActivity!} /> 
                    </Box>
                </Grid>
            </Grid>
        </Container>
        
    )
            
})