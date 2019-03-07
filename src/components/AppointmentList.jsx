import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Appointment from './Appointment';
import Typography from '@material-ui/core/Typography';
import AppointmentModal from './AppointmentModal';


const styles = theme => ({
    status: {
        display: 'flex',
    },

    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 30,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        top: '35%',
        left: '35%'
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
                <Typography variant="h5" gutterBottom>Mar 6, 2019</Typography>
                <Appointment startTime="10:00" endTime="11:00" status="Available" handleOpen={this.handleOpen} />
                <Appointment startTime="11:00" endTime="12:00" status="Available" />
                <Appointment startTime="12:00" endTime="1:00" status="Available" />
                <Appointment startTime="1:00" endTime="2:00" status="Available" />
                <AppointmentModal modalOpen={modalOpen}/>
            </div>
        );
    }
}

export default withStyles(styles)(AppointmentList);