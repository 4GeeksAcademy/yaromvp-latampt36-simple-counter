import React, { useState, useEffect } from 'react';

export const Timer = () => {
    return (
        <div className="d-flex justify-content-evenly p-2">
            <button type="button" className="btn btn-primary">Start</button>
            <button type="button" className="btn btn-danger">Stop</button>
            <button type="button" className="btn btn-success">Restart</button>
        </div>
    )

}