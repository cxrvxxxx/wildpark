import * as actionTypes from '../actions/currentPage/actionTypes';

const initialCurrentPageState = {
    currentPage: actionTypes.HOME_PAGE
};

const displayPageReducer = (state = initialCurrentPageState, action) => {
    switch (action.type) {
        case actionTypes.HOME_PAGE: {
            return {
                ...state,
                currentPage: actionTypes.HOME_PAGE
            };
        };

        case actionTypes.SIGNUP_PAGE: {
            return {
                ...state,
                currentPage: actionTypes.SIGNUP_PAGE
            };
        };

        case actionTypes.ABOUT_PAGE: {
            return {
                ...state,
                currentPage: actionTypes.ABOUT_PAGE
            };
        };

        case actionTypes.SUPPORT_PAGE: {
            return {
                ...state,
                currentPage: actionTypes.SUPPORT_PAGE
            };
        };

        case actionTypes.CONTACT_PAGE: {
            return {
                ...state,
                currentPage: actionTypes.CONTACT_PAGE
            };
        };

        default: return state;
    };
};

export default displayPageReducer;