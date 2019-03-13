import { OPEN_MODAL, CLOSE_MODAL, UPDATE_VALUE, RESET_MODAL } from '../actions/modalActions';

const initModal = {
    startTime: '',
    endTime: '',
    name: '',
    phone: '',
    display: false
}

export default function (state = { appModal: initModal }, action) {

    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                appModal: {
                    ...state.appModal,
                    index: action.payload.appointment.index,
                    startTime: action.payload.appointment.startTime,
                    endTime: action.payload.appointment.endTime,
                    name: action.payload.appointment.name,
                    phone: action.payload.appointment.phone,
                    available: action.payload.appointment.available,
                    display: true,
                }
            };
        case CLOSE_MODAL:
            return {
                ...state,
                appModal: { ...state.appModal, startTime: '', endTime: '', name: '', phone: '', display: false, }
            };
        case UPDATE_VALUE:
            return {
                ...state,
                appModal: { ...state.appModal, [action.payload.field]: action.payload.value }
            };
        case RESET_MODAL:
            return {
                ...state,
                appModal: { ...state.appModal, name: '', phone: '' }
            };
        default:
            return state;
    }
}
