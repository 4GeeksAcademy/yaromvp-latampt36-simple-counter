import React, { useState, useEffect } from 'react';

const SecondsCounter = ({ seconds }) => {
    const digits = seconds.toString().padStart(6, '0').split('').map(Number);

    return (
        <div className="d-flex justify-content-center align-items-center bg-black text-white p-3">
            <div className="d-flex justify-content-center align-items-center bg-dark rounded-3 mx-1" style={{ width: '80px', height: '80px' }}>
                <i className="fas fa-clock fa-3x"></i>
            </div>
            {digits.map((digit, index) => (
                <div key={index} className="d-flex justify-content-center align-items-center bg-dark rounded-3 mx-1" style={{ width: '60px', height: '80px' }}>
                    <h1 className="display-5 mb-0">{digit}</h1>
                </div>
            ))}
        </div>
    );
};

export const App = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <SecondsCounter seconds={seconds} />;
};