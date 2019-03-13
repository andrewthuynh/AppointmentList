import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ClearIcon from '@material-ui/icons/Clear';

import {openModal} from '../../actions/modalActions';
import { connect } from 'react-redux';

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

const mapDispatchToProps = (dispatch) =>{
    return {
        onOpen: appointment => dispatch(openModal(appointment))
    };
}

const Appointment = (props) => {

    const { classes, appointment } = props;
    return (
        <div>
            <Card style={{ ...styles.card, ...(!appointment.available ? styles.cardReserved : {}), }}>
                <CardActionArea onClick={() => props.onOpen(appointment)}>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography variant="h6">
                                    {appointment.startTime} -
                                    </Typography>
                                <Typography variant="h6">
                                    {appointment.endTime}
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item className={classes.status}>
                            <Typography variant="h5" align="center">{appointment.available ? 'Available' : 'Unavailable'}</Typography>
                        </Grid>
                        <Grid item className={classes.status}>
                            {appointment.available ? <CheckCircleOutlineIcon className={classes.icon} /> : <ClearIcon className={classes.icon} />}
                        </Grid>
                    </Grid>
                </CardActionArea>
            </Card>
        </div>
    );
}

const styled =  withStyles(styles)(Appointment);

export default connect(null, mapDispatchToProps)(styled);