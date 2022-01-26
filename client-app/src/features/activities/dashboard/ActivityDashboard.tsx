import { Grid, Container, Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { PagingParams } from '../../../app/models/pagination';
import { useStore } from '../../../app/stores/store';
import ActivityFilters from './ActivityFilters';
// import ActivityForm from '../form/ActivityForm';
import ActivityStack from './ActivityStack';
import InfiniteScroll from 'react-infinite-scroller';
import { Loader } from 'semantic-ui-react';
import React from 'react';
import ActivityListItemPlaceholder from './ActivityListItemPlaceholder';

export default observer(function ActivityDashboard() {
    const {activityStore} = useStore();    
    const {loadingInitial, loadActivities, activityRegistry, pagination, setPagingParams} = activityStore;
    const [loadingNext, setLoadingNext] = useState(false);

    function handleGetNext() {
      setLoadingNext(true);
      setPagingParams(new PagingParams(pagination!.currentPage + 1));
      loadActivities().then(() => setLoadingNext(false));
    }
  
    useEffect(() => {
      if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry, loadActivities])

    // if(loadingInitial && !loadingNext) return <LoadingComponent message="Loading Activities..." />

    return (
      <Container>
        <Grid container columns={18} spacing={4} mt={0.5} >
            <Grid item lg={12} md={12} sm={16}>

              {loadingInitial && !loadingNext ? (
                <Stack sx={{marginTop: '2em'}} spacing={4}>
                    <ActivityListItemPlaceholder />
                    <ActivityListItemPlaceholder />
                    <ActivityListItemPlaceholder />
                    <ActivityListItemPlaceholder />
                </Stack>
                
              ) : (
                <InfiniteScroll
                    pageStart={0}
                    loadMore={() => handleGetNext()}
                    hasMore={!loadingNext && !!pagination && pagination.currentPage < pagination.totalPages}
                    initialLoad={false} 
                >
                      <ActivityStack />
                </InfiniteScroll>
              )}
              
              
            </Grid>

            <Grid item lg={6} md={6} sm={16} mt={4} >
              <ActivityFilters className='sticky' sx={{ top: '5em' }}/>
            </Grid>

            <Grid item lg={12} md={12} sm={16}>
              <Loader active={true} />
            </Grid>

        </Grid>
      </Container>
    )
})

