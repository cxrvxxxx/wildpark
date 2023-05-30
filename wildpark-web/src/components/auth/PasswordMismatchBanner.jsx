import React from "react";

const PasswordMismatchBanner = () => {
    return (
        <div className="row">
            <div className="alert alert-danger" role="alert">
                Passwords do not match
            </div>
        </div>
    );
};

export default PasswordMismatchBanner;