import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';

const styles = ({
    card: {
        display: 'flex',
        backgroundColor: '#66bb6a',
        marginBottom: 10,
    },
    cardReserved: {
        backgroundColor: '#ef5350',
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
    },
    icon: {
        margin: 10,
        fontSize: 32,
      },
});

class Appointment extends Component {

    state = {
        startTime: '11:00',
        endTime: '12:00',
        available: '',
    };

    render() {
        const { classes, startTime, endTime, available, handleOpen } = this.props;
        return (
            <div>
                <Card style={{...styles.card, ...(!available ? styles.cardReserved : {}),}}>
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
                                <Typography variant="h5" align="center">{available ? 'Available' : 'Unavailable'}</Typography>
                            </Grid>
                            <Grid item className={classes.status}>
                                {available ? <CheckCircleOutlineIcon className={classes.icon}/> : <ClearIcon className={classes.icon}/>}
                            </Grid>
                        </Grid>
                    </CardActionArea>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(Appointment);