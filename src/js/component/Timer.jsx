import React, { useState, useEffect } from 'react';

export const Timer = (props) => {

    const clickStart = (e) => {
        props.setStart(
            (prev) => !prev
        )
        props.setStop(
            (prev) => !prev
        )
    }

    const clickStop = (e) => {
        props.setStart(
            (prev) => !prev
        )
        props.setStop(
            (prev) => !prev
        )

        const stopIntervalId = setInterval();
        /* later */
        clearInterval(stopIntervalId);
    }

    const clickRestart = (e) => {
        props.setStart(true)
        props.setStop(false)
    }

    return (
        <div className="d-flex justify-content-evenly p-2">
            <button type="button" className={`btn btn-${props.start ? "secondary" : "primary"} mx-1" ${props.start ? "disabled" : ""}`} onClick={clickStart}>Start</button>
            <button type="button" className={`btn btn-${props.stop ? "secondary" : "danger"} mx-1 ${props.stop ? "disabled" : ""}`} onClick={clickStop}>Stop</button>
            <button type="button" className="btn btn-success mx-1" onClick={clickRestart}>Restart</button>
        </div>
    )

}