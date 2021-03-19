import React from "react";

const DateImg = props => {
    const {date} = props
    return (
        <h3>
            <div className = 'things'>
                {date}
            </div>

        </h3>
    )
}

export default DateImg;
