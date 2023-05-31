import React from 'react';

const InvalidInputMessage = ({ msg }) => {
    return (
        <p style={{ color: "#FF0000", margin: 0 }}>{msg}</p>
    );
};

export default InvalidInputMessage;