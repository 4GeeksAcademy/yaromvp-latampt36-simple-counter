import React, { useState, useEffect } from 'react';

export const Alert = () => {
    return (
        <div className="p-2">
            <label htmlFor="alertInput" className="form-label">Mostrar alerta en el segundo:</label>
            <input type="number" id="alertInput" className="form-control" onChange="" value="" />
        </div>
    )
}