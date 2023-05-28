import { HOME_PAGE } from '../actions/currentPage/actionTypes';

const initialCurrentPageState = {
    currentPage: HOME_PAGE
};

const displayPageReducer = (state = initialCurrentPageState, action) => {
    switch(action.type) {
        case HOME_PAGE: {
            return {
                ...state,
                currentPage: HOME_PAGE
            };
        };

        default: return state;
    };
};

export default displayPageReducer;