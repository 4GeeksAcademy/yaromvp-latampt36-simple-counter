import React, { useState, useEffect } from 'react';

export const Countdown = () => {
    return (
        <div className="p-2">
            <label htmlFor="countdownInput" className="form-label">Iniciar cuenta regresiva desde:</label>
            <input type="number" id="countdownInput" className="form-control" onChange={null} value={null} />
        </div>
    )
}