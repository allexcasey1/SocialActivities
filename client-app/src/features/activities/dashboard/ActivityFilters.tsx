import React from 'react';
import { FilterAltTwoTone } from '@mui/icons-material';
import { Box, Divider, Paper, Typography } from '@mui/material';
import Calendar from 'react-calendar';
import { BoxProps } from '@mui/system';



export default function ActivityFilters(props: BoxProps) {
    return(
        <Box {...props}>
            <Paper sx={{verticalAlign: 'middle' }}>
    
                <Typography color={'#39f'} variant="subtitle1" fontWeight={'bold'} sx={{backgroundColor: '#ccc', borderRadius: '5px 5px  1px 1px'}}
                    children={
                        <span>
                            <FilterAltTwoTone sx={{display: 'inline', verticalAlign: 'middle'}} />
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
        
            <Paper sx={{marginTop: '2em', py: '1em', px: '1em'}}>
                <Calendar />       
            </Paper>
        </Box>
    )
}


