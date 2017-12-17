import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from '../Utils/ActionTypes';

const initialState = {
    isFetching: false,
    data: [],
    anyError: false,
    errorMessage: null
}


export default function(state = initialState, action) {
    switch(action.type) {
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                data: [],
                anyError: false,
                errorMessage: null
            })
            
        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                anyError: false,
                errorMessage: null
            })

        case FETCHING_COIN_DATA_FAIL:
            return Object.assign({}, state, {
                isFetching: false,
                data: [],
                anyError: true,
                errorMessage: action.payload
            })

        default:
            return state;
    }
}