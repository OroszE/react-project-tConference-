import {types} from '../actions/'

export const initialState = {
    reservations: []
};

export const mainReducer = (state, action) => {
    var nState = state;
    switch(action.type) {
        case types.GET_CONFERENCES:
            nState = {
                ...state,
                reservations: action.payload.reverse()
            }

            return nState;
        case types.PUSH_CONFERENCE:
            nState = {
                ...state,
                reservations: [action.payload, ...state.reservations]
            }

    }

    console.log(nState);
    return nState;
};