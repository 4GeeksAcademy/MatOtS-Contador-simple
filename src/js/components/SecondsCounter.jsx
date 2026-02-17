import React from "react";

const SecondsCounter = (props) => {

    return (
        <div className="number">
            {props.seconds}
        </div>
    );
}

export default SecondsCounter;