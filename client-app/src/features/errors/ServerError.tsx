import { Box, Container, Typography, Paper } from '@mui/material';
import { Code } from '@mui/icons-material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../app/stores/store';

export default observer(function ServerError() {
    const {commonStore } = useStore();
    return (
        <Container>
            <Box mt={2}>
                <Typography variant='h3' children={
                    <>Server Error</>
                } />
                <Typography variant='h5' color={'red'} children={commonStore.error?.message} />
                {commonStore.error?.details && (
                    <Paper>
                        <Box padding={2} margin={2}>
                            <Typography variant='h4' children={<>Stack Trace <Code /></>} color='teal' />
                            <code style={{marginTop: '10px'}}>{commonStore.error.details}</code>
                        </Box>
                    </Paper>
                )}
            </Box>
        </Container>
    )
})