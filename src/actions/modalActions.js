export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const UPDATE_VALUE = 'UPDATE_VALUE';
export const RESET_MODAL = 'RESET_MODAL';

export function openModal(appointment) {
    return {
        type: OPEN_MODAL,
        payload: { appointment }
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function updateValue(field, value) {
    return function (dispatch) {
        dispatch({
            type: UPDATE_VALUE,
            payload: {
                field,
                value
            }
        })
    }
}

export function resetModal() {
    return function (dispatch) {
        dispatch({
            type: RESET_MODAL,
        });
    }
}
