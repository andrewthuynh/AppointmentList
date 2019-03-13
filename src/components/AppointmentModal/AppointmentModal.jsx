import React from 'react'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { closeModal, updateValue, resetModal } from '../../actions/modalActions';
import { bookApp, resetApp } from '../../actions/appActions';


const styles = theme => ({
    status: {
        display: 'flex',
    },

    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 40,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
        top: '35%',
        left: '35%'
    },
    button: {
        margin: theme.spacing.unit,
    },
    cancel: {backgroundColor: "#ffee58", margin: theme.spacing.unit},
    submit: {backgroundColor: "#66bb6a", margin: theme.spacing.unit},
    delete: {backgroundColor: "#ef5350", margin: theme.spacing.unit},
});

const mapStateToProps = state => {
    return {
        index: state.appModalReducer.appModal.index,
        startTime: state.appModalReducer.appModal.startTime,
        endTime: state.appModalReducer.appModal.endTime,
        name: state.appModalReducer.appModal.name,
        phone: state.appModalReducer.appModal.phone,
        available: state.appModalReducer.appModal.available,
        display: state.appModalReducer.appModal.display,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseModal: () => dispatch(closeModal()),
        onHandleChange: (field, value) => dispatch(updateValue(field, value)),
        onBook: (index, name, phone) => dispatch(bookApp(index, name, phone)),
        onResetModal: () => dispatch(resetModal()),
        onResetApp: (index) => dispatch(resetApp(index))
    };
}


const AppointmentModal = (props) => {

    const { classes, index, startTime, endTime, name, phone, display } = props;

    return (
        <Modal
            open={display}
            onClose={() => props.onCloseModal()}
        >
            <div className={classes.paper}>
                <Typography variant="h5" gutterBottom>Appointment</Typography>
                <Typography variant="h6" gutterBottom>{startTime} - {endTime}</Typography>
                <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={name}
                    margin="normal"
                    fullWidth
                    onChange={(e) => props.onHandleChange('name', e.target.value)}
                />
                <TextField
                    id="standard-name"
                    label="Phone number"
                    className={classes.textField}
                    value={phone}
                    margin="normal"
                    fullWidth
                    onChange={(e) => props.onHandleChange('phone', e.target.value)}
                />
                <div align="right">

                    <Button variant="contained" color="primary" className={classes.button} onClick={() => props.onResetModal(index)}>
                        CLEAR
                    </Button>
                    <Button variant="contained" className={classes.submit} onClick={() => props.onBook(index, name, phone)}>
                        SUBMIT
                    </Button>
                </div>
                <div align="right">
                    <Button variant="contained" className={classes.cancel} onClick={() => props.onCloseModal()}>
                        CANCEL
                    </Button>
                    <Button variant="contained" className={classes.delete} onClick={() => props.onResetApp(index)}>
                        DELETE
                    </Button>
                </div>
            </div>
        </Modal>
    )
}




const styled = withStyles(styles)(AppointmentModal);

export default connect(mapStateToProps, mapDispatchToProps)(styled);
