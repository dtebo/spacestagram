import {
    FETCH_IMAGE_START,
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_FAIL
} from '../actions';

const initialState = {
    images: [],
    isLoading: false,
    error: ''
};

const imageReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_IMAGE_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_IMAGE_SUCCESS:
            return {
                ...state,
                images: action.payload,
                error: '',
                isLoading: false
            };
        case FETCH_IMAGE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    };
};

export default imageReducer;