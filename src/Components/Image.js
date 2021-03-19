import React from "react";

const Img = props => {
    const {image} = props
    return (
        <img
            alt = 'APOD'
            className = 'umm'
            src = {image}
            />
    )
}

export default Image;
