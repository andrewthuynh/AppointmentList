import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    },
    button: {
        margin: theme.spacing.unit,
    },
});
class AppointmentModal extends Component {


    state = {
        modalOpen: true,
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { test } = this.state;
        const { classes, modalOpen } = this.props;
        return (
            <Modal
                open={modalOpen}
                onClose={this.handleClose}
            >
                <div className={classes.paper}>
                    <Typography variant="h5" gutterBottom>Mar 6, 2019</Typography>
                    <Typography variant="h6" gutterBottom>10:00 - 11:00</Typography>
                    <TextField
                        id="standard-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="Phone number"
                        className={classes.textField}
                        value={this.state.phoneNumber}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <Button variant="contained" color="secondary" className={classes.button}>
                        CANCEL
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                        SUBMIT
                    </Button>
                </div>
            </Modal>
        )
    }
}

export default withStyles(styles)(AppointmentModal);
