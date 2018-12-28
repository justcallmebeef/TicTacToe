import React, { Fragment } from 'react'

const Grid = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="column">
                    <span className="square">X</span>
                    <span className="square">O</span>
                    <span className="square">X</span>
                </div>
                <div className="column">
                    <span className="square">X</span>
                    <span className="square">O</span>
                    <span className="square">X</span>
                </div>
                <div className="column">
                    <span className="square">X</span>
                    <span className="square">O</span>
                    <span className="square">X</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Grid 