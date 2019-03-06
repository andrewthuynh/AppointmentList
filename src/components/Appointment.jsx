import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

    render() {
        const { classes, theme } = this.props;
        return (
            <div>
                <Card className={classes.card}>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography variant="h6">
                                    10:00 -
                            </Typography>
                                <Typography variant="h6">
                                    11:00
                            </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item classname={classes.status}>
                            <Typography variant="h5" align="center">Available</Typography>
                        </Grid>
                        <Grid item classname={classes.status}>
                            <Typography variant="h5" align="center">Edit</Typography>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(Appointment);