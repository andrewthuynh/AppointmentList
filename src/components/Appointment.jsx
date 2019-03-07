import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    status: {
        display: 'flex',

    }
});

class Appointment extends Component {

    state = {
        startTime: '11:00',
        endTime: '12:00',
        status: '',
    };

    render() {
        const { classes, startTime, endTime, status, handleOpen } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <CardActionArea onClick={() => handleOpen}>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <Grid item className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography variant="h6">
                                        {startTime} -
                                    </Typography>
                                    <Typography variant="h6">
                                        {endTime}
                                    </Typography>
                                </CardContent>
                            </Grid>
                            <Grid item className={classes.status}>
                                <Typography variant="h5" align="center">{status}</Typography>
                            </Grid>
                            <Grid item className={classes.status}>
                                <Typography variant="h5" align="center">Edit</Typography>
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(Appointment);