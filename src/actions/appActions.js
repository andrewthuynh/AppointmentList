import { CLOSE_MODAL } from '../actions/modalActions';

export const BOOK_APP = 'BOOK_APP';
export const RESET_APP = 'RESET_APP';

export function bookApp(index, name, phone) {
    return function (dispatch) {
        dispatch({
            type: BOOK_APP,
            payload: { index, name, phone }
        });
        dispatch({
            type: CLOSE_MODAL
        })
    }
}

export function resetApp(index) {
    return function (dispatch) {
        dispatch({
            type: RESET_APP,
            payload: { index }
        });
        dispatch({
            type: CLOSE_MODAL
        })
    }
}