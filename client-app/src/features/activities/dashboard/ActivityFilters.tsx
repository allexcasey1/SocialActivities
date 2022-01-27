import React from 'react';
import { FilterAltTwoTone } from '@mui/icons-material';
import { Box, Divider, MenuItem, MenuList, Paper, Typography } from '@mui/material';
import Calendar from 'react-calendar';
import { BoxProps } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../app/stores/store';

export default observer( function ActivityFilters(props: BoxProps) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const {activityStore: {predicate, setPredicate}} = useStore();
    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        predicate: string,
        value: string | Date,
        index: number,
      ) => {
        setSelectedIndex(index);
        setPredicate(predicate, value);
      };
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
                <MenuList>
                   <MenuItem className='filter-option' selected={selectedIndex === 1 ? true : false} onClick={(e) => 
                        handleMenuItemClick(e, 'all', 'true', 1)}>
                       <Typography variant='body1' >All Activities</Typography>
                   </MenuItem>
                   <Divider />
                   <MenuItem  className='filter-option' selected={selectedIndex === 2 ? true : false} onClick={(e) => 
                        handleMenuItemClick(e, 'isGoing', 'true', 2)}>
                       <Typography variant='body1' >I'm Going</Typography>
                   </MenuItem>
                   <Divider />
                   <MenuItem  className='filter-option' selected={selectedIndex === 3 ? true : false} onClick={(e) => 
                        handleMenuItemClick(e, 'isHost', 'true', 3)}>
                       <Typography variant='body1' >I'm Hosting</Typography>
                   </MenuItem>   
                </MenuList>
            </Paper>        
            <Paper sx={{marginTop: '2em', py: '1em', px: '1em'}}>
                <Calendar 
                    onChange={(date: any) => setPredicate('startDate', date as Date)}
                    value={predicate.get('startDate') || new Date()}/>       
            </Paper>
        </Box>
    )
})


