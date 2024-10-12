import React, { useState, useEffect } from 'react';

export const Countdown = () => {
    return (
        <div className="p-2">
            <label htmlFor="countdownInput" className="form-label">Iniciar cuenta regresiva desde:</label>
            <div className='d-flex align-items-center gap-2'>
                <input type="number" id="countdownInput" className="form-control" onChange="" value="" />
                <button type="button" className="btn btn-danger" onClick="">Countdown</button>
            </div>
        </div>
    )
}