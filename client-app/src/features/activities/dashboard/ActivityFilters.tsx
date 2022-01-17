import React from 'react';
import { FilterAltSharp } from '@mui/icons-material';
import { Box, Paper, Typography } from '@mui/material';
import Calendar from 'react-calendar';

export default function ActivityFilters() {
    return(
        <>
        <Paper>
            <FilterAltSharp sx={{display: 'inline', verticalAlign: 'middle', color: '#39f'}} />
            <Typography color={'#39f'} variant="subtitle1" fontWeight={'bold'} sx={{display: 'inline'}}>Filters</Typography>
            <Box ml={1} sx={{width: '100%', marginTop: '0', padding: '0'}} >
               <Box mt={1.8} height={'2em'} className='filter-option'>
                   <Typography variant='body1' >All Activities</Typography>
               </Box>
               <Box mt={1.8} height={'2em'} className='filter-option'>
                   <Typography variant='body1' >I'm Going</Typography>
               </Box>
               <Box mt={1.8} pb={1.8} height={'2em'} className='filter-option'>
                   <Typography variant='body1' >I'm Hosting</Typography>
               </Box>   
            </Box>
        </Paper>

        <Paper sx={{marginTop: '2em'}}>
            <Calendar />
            
        </Paper>
        </>
    )
}


