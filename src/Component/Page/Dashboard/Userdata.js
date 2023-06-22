import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Bar from '../Dashboard/Count';
import Chart from '../Dashboard/Graph';
import Pie from '../Dashboard/Recentclient';
import Attendance from '../Dashboard/Test';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import A from '../../../Assest/Image/A.png';
import B from '../../../Assest/Image/B.png';
import C from '../../../Assest/Image/C.png';
import D from '../../../Assest/Image/D.png';
import E from '../../../Assest/Image/e.png';

function Dash() {
    return (
        <Grid container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={2.4}>
                    <Card sx={{ height:80,borderRadius:1 }}>
                        <CardHeader
                            avatar={ <Avatar alt="Remy Sharp" src={A} />}
                            title="Total Clients"
                            subheader="365"
                        />
                        </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={2.4}>
                <Card sx={{ height:80,borderRadius:1 }}>
                        <CardHeader
                            avatar={ <Avatar alt="Remy Sharp" src={B} />}
                            title="Total Test Report"
                            subheader="62236"
                        />
                        </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={2.4}>
                <Card sx={{ height:80,borderRadius:1 }}>
                        <CardHeader
                            avatar={ <Avatar alt="Remy Sharp" src={C} />}
                            title="Total Ratings"
                            subheader="2598"
                        />
                        </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={2.4}>
                <Card sx={{ height:80,borderRadius:1 }}>
                        <CardHeader
                            avatar={ <Avatar alt="Remy Sharp" src={D} />}
                            title="Total Test Tips Report"
                            subheader="245"
                        />
                        </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={2.4}>
                <Card sx={{ height:80,borderRadius:1 }}>
                        <CardHeader
                            avatar={ <Avatar alt="Remy Sharp" src={E} />}
                            title="Total new User"
                            subheader="20"
                        />
                        </Card>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={6} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 400,
                            borderRadius: 5,
                        }}
                    >
                        <Bar />
                    </Paper>
                </Grid>
                {/* Chart */}
                <Grid item xs={12} md={6} lg={3}>
                        <Chart/>
                </Grid>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 400,
                            borderRadius: 5,
                        }}
                    >
                        <Pie />

                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 400,
                            borderRadius: 5,
                        }}
                    >
                        <Attendance />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Dash
