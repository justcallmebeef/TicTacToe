import React, { Fragment } from 'react'

const Grid = (props) => {
    return (
        <Fragment>
            <div className="container">
                <div className="column">
                    <span id="one" className="square" onClick={props.handleTurnOneBoxOne}>{props.boxOne}</span>
                    <span id="two"className="square" onClick={props.handleTurnOneBoxTwo}>{props.boxTwo}</span>
                    <span id="three" className="square" onClick={props.handleTurnOneBoxThree}>{props.boxThree}</span>
                </div>
                <div className="column">
                    <span className="square" onClick={props.handleTurnOneBoxFour}>{props.boxFour}</span>
                    <span className="square" onClick={props.handleTurnOneBoxFive}>{props.boxFive}</span>
                    <span className="square" onClick={props.handleTurnOneBoxSix}>{props.boxSix}</span>
                </div>
                <div className="column">
                    <span className="square" onClick={props.handleTurnOneBoxSeven}>{props.boxSeven}</span>
                    <span className="square" onClick={props.handleTurnOneBoxEight}>{props.boxEight}</span>
                    <span className="square" onClick={props.handleTurnOneBoxNine}>{props.boxNine}</span>
                </div>
            </div>
        </Fragment>
    )
}

export default Grid 