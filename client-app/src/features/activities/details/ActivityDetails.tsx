import { Box, Grid } from "@mui/material";
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
    const { selectedActivity, loadActivity, loadingInitial } = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !selectedActivity) return <LoadingComponent />;

    return (
        <Grid container columns={18} mt={2}>
            <Grid item lg={12} md={18} sm={18}  mx={1} mt={2}>
                
                {selectedActivity &&
                <Box>
                    <Box mt={2}>
                        <ActivityDetailedHeader />
                    </Box>
                    <Box mt={2}>
                        <ActivityDetailedInfo />
                    </Box>
                    <Box mt={2}>
                        <ActivityDetailedChat /> 
                    </Box>
                </Box>
                }
            </Grid>
            <Grid item lg={4} md={18} sm={18} xs={18} mx={1} mt={2}>
                <Box mt={2}>
                   <ActivityDetailedSidebar /> 
                </Box>
            </Grid>
        </Grid>
        
    )
            
})