import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Appointment from '../Appointment'
import Typography from '@material-ui/core/Typography';
import AppointmentModal from '../AppointmentModal';

import { connect } from 'react-redux';

const styles = theme => ({
    status: {
        display: 'flex',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    container: {
        marginTop: 50,
        marginLeft: 400,
        marginRight: 400,
    },
});

const mapStateToProps = state => {
    return { appointments: state.appointmentReducer.appointments };
};

const AppointmentList = (props) => {

    const { classes, appointments } = props;

    return (
        <div className={classes.container}>
            <Typography variant="h5" gutterBottom>Today's Appointments</Typography>
            {
                appointments.map((appointment) => {
                    return <Appointment key={appointment.index} appointment={appointment} />
                })
            }
            <AppointmentModal />
        </div>
    );
}

const styled = withStyles(styles)(AppointmentList);
export default connect(mapStateToProps, null)(styled);