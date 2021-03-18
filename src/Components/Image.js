import React from "react";

const Img = props => {
    const {image} = props
    return (
        <img
            alt = 'APOD'
            className = 'idkyet'
            src = {image}
            />
    )
}

export default Image;
