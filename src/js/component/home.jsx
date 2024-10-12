import React, { useState, useEffect } from 'react';
import { SecondsCounter } from './SecondsCounter';
import { Timer } from './Timer';
import { Countdown } from './Countdown';
import { Alert } from './Alert';


const Home = () => {

	const [secondsCounter, setSecondsCounter] = useState(0)

	const [start, setStart] = useState(true)
	const [stop, setStop] = useState(false)
	const [restart, setRestart] = useState(false)

	const [countdown, setCountdown] = useState(false)

	const [alert, setAlert] = useState(false)

	return (
		<>
			<SecondsCounter secondsCounter={secondsCounter} setSecondsCounter={setSecondsCounter} />
			<div className="d-flex flex-column justify-content-center align-items-center">
				<Timer start={start} setStart={setStart} stop={stop} setStop={setStop} restart={restart} setRestart={setRestart} />
				<Countdown countdown={countdown} setCountdown={setCountdown} />
				<Alert alert={alert} setAlert={setAlert} />
			</div>
		</>
	);
};

export default Home;
