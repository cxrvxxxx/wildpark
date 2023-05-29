import { HOME_PAGE, SIGNUP_PAGE } from './actionTypes';

export const showHome = () => {
    return {
        type: HOME_PAGE
    };
};

export const showSignup = () => {
    return {
        type: SIGNUP_PAGE
    };
};