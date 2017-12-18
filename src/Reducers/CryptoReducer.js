import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
    REFRESH_COIN_DATA
} from './../Utils/ActionTypes';

const initialState = {
    refreshData: false,
    isFetching: false,
    data: [],
    anyError: false,
    errorMessage: null
}


export default function(state = initialState, action) {
    switch(action.type) {
        case FETCHING_COIN_DATA:
            return Object.assign({}, state, {
                refreshData: false,
                isFetching: true,
                data: [],
                anyError: false,
                errorMessage: null
            })
            
        case FETCHING_COIN_DATA_SUCCESS:
            return Object.assign({}, state, {
                refreshData: false,
                isFetching: false,
                data: action.payload,
                anyError: false,
                errorMessage: null
            })

        case FETCHING_COIN_DATA_FAIL:
            return Object.assign({}, state, {
                refreshData: false,
                isFetching: false,
                data: [],
                anyError: true,
                errorMessage: action.payload
            })

            case REFRESH_COIN_DATA:
            return Object.assign({}, state, {
                refreshData: true,
                isFetching: false,
                data: [],
                anyError: false,
                errorMessage: null
            })

        default:
            return state;
    }
}