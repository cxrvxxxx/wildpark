import * as actionTypes from './actionTypes';

export const showHomePage = () => {
    return {
        type: actionTypes.HOME_PAGE
    };
};

export const showSignupPage = () => {
    return {
        type: actionTypes.SIGNUP_PAGE
    };
};

export const showAboutPage = () => {
    return {
        type: actionTypes.ABOUT_PAGE
    };
}

export const showSupportPage = () => {
    return {
        type: actionTypes.SUPPORT_PAGE
    };
}

export const showContactPage = () => {
    return {
        type: actionTypes.CONTACT_PAGE
    };
}