import React, { useState } from 'react';
import { Timer } from './Timer';
import { Countdown } from './Countdown';
import { Alert } from './Alert';

export const Options = (props) => {

    const handleClick = (e) => {
        props.setShowOptions(
            (prev) => {
                return !prev;
            }
        );
    }

    return (
        <div className="contariner d-flex flex-column justify-content-center align-items-center">
            <button type="button" className={`btn btn-${props.showOptions ? "secondary" : "primary"} mb-3`} onClick={handleClick}>{props.showOptions ? "Hide Options" : "Show Options"}</button>

            <div className={`accordion accordion-flush ${props.showOptions ? "" : "d-none"}`} id="accordionFlushExample" style={{ width: '35%' }}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Timer
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <Timer />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Countdown
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <Countdown />
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Alert
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <Alert />
                    </div>
                </div>
            </div>
        </div>

    )
}