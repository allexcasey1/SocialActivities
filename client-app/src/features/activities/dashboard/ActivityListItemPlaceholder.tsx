import React from 'react';
import { Card, CardContent, CardHeader, Grid, Divider, Skeleton} from '@mui/material';

export default function ActivityListItem() {
    return (
        <Card sx={{borderRadius: '5px', marginBottom: '1em' }}>
            <CardHeader
                avatar={ 
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                }

                title={ 
                        <Skeleton
                          animation="wave"
                          height={20}
                          width="80%"
                          style={{ marginBottom: 6 }}
                        />
                }
                subheader={ 
                        <Skeleton animation="wave" height={20} width="40%" />
                }
            />

           <Divider />

            <CardContent>
                    <React.Fragment>
                        <Skeleton animation="wave" height={50} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={40} width="80%" />
                    </React.Fragment>
               
            </CardContent>

                

            <CardContent sx={{ py: 0, px: 0}}>

                    <React.Fragment>
                        <Skeleton animation="wave" height={30} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={30} width="80%" />
                    </React.Fragment>
        
            </CardContent>

                <Grid container columns={2}>
                  <React.Fragment>
                    <Skeleton animation="wave" height={30} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={30} width="80%" />
                  </React.Fragment>  
                </Grid>         
        </Card>
    )
}