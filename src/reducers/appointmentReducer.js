import { initTimes } from '../initialTimes';
import { BOOK_APP, RESET_APP } from '../actions/appActions';

export default function (state = { appointments: initTimes }, action) {
  switch (action.type) {
    case BOOK_APP:
      return {
        ...state,
        appointments: 
          [
            ...state.appointments.slice(0, action.payload.index),
            { ...state.appointments[action.payload.index], available: false, name: action.payload.name, phone: action.payload.phone },
            ...state.appointments.slice(action.payload.index + 1)
          ]
      };
    case RESET_APP:
    return {
      ...state,
      appointments: 
        [
          ...state.appointments.slice(0, action.payload.index),
          { ...state.appointments[action.payload.index], available: true, name: '', phone: '' },
          ...state.appointments.slice(action.payload.index + 1)
        ]
    };
    default:
      return state;
  }
}
