import React from 'react'

const StateComponent = () => {
    return (
        <h1
            onClick={() => setIsGreen(!isGreen)}
            style={{ color: isGreen ? "limegreen" : "crimson" }}
        >
            useState Example
        </h1>
    );
}
export default StateComponent;