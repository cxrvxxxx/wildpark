import React from "react";

const InvalidUsernameBanner = () => {
    return (
        <div className="row">
            <div className="alert alert-danger" role="alert">
                Invalid username
            </div>
        </div>
    );
};

export default InvalidUsernameBanner;