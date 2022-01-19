import React from 'react';
import { FilterAltTwoTone } from '@mui/icons-material';
import { Box, Divider, Paper, Typography } from '@mui/material';
import Calendar from 'react-calendar';

export default function ActivityFilters() {
    return(
        <Box className='sticky' top={'6em'}>
            <Paper sx={{verticalAlign: 'middle' }}>
    
                <Typography color={'#39f'} variant="subtitle1" fontWeight={'bold'} sx={{backgroundColor: '#ccc'}}
                    children={
                        <span>
                            <FilterAltTwoTone  sx={{display: 'inline', verticalAlign: 'middle'}} />
                            Filters
                        </span>
                    }/>

                <Box mx={3} >
                   <Box mt={1.8} height={'2em'} className='filter-option'>
                       <Typography variant='body1' >All Activities</Typography>
                   </Box>
                   <Divider />
                   <Box mt={1.8} height={'2em'} className='filter-option'>
                       <Typography variant='body1' >I'm Going</Typography>
                   </Box>
                   <Divider />
                   <Box mt={1.8} pb={1.8} height={'2em'} className='filter-option'>
                       <Typography variant='body1' >I'm Hosting</Typography>
                   </Box>   
                </Box>
            </Paper>
        
            <Paper sx={{marginTop: '2em', padding: '1em 2em 2em 2em' }}>
                <Calendar />       
            </Paper>
        </Box>
    )
}


