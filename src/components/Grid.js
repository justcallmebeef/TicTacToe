import React, { Fragment } from 'react'

const Grid = (props) => {
    return (
        <Fragment>
            <div className="container">
                <div className="column">
                    <span className="square"></span>
                    <span className="square"></span>
                    <span className="square"></span>
                </div>
                <div className="column">
                    <span className="square"></span>
                    <span className="square"></span>
                    <span className="square"></span>
                </div>
                <div className="column">
                    <span className="square"></span>
                    <span className="square"></span>
                    <span className="square"></span>
                </div>
            </div>
        </Fragment>
    )
}

export default Grid 