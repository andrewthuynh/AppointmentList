import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Appointment from '../Appointment'
import Typography from '@material-ui/core/Typography';
import AppointmentModal from '../AppointmentModal';

const styles = theme => ({
    status: {
        display: 'flex',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      }
});

class AppointmentList extends Component {

    state = {
        modalOpen: true,
        selectedAppointment: undefined,
    };

    handleOpen = (appointment) => {
        this.setState({ modalOpen: true });
    };

    handleClose = () => {
        this.setState({ modalOpen: false });
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { modalOpen } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="h5" gutterBottom>Today's Appointments</Typography>
                <Appointment startTime="9:00" endTime="10:00" available handleOpen={this.handleOpen} />
                <Appointment startTime="10:00" endTime="11:00" available handleOpen={this.handleOpen} />
                <Appointment startTime="11:00" endTime="12:00" available />
                <Appointment startTime="12:00" endTime="1:00" available={false} />
                <Appointment startTime="1:00" endTime="2:00" available />
                <Appointment startTime="2:00" endTime="3:00" available handleOpen={this.handleOpen} />
                <Appointment startTime="3:00" endTime="4:00" available />
                <Appointment startTime="4:00" endTime="5:00" available={false} />
                <AppointmentModal modalOpen={modalOpen}/>
            </div>
        );
    }
}

export default withStyles(styles)(AppointmentList);