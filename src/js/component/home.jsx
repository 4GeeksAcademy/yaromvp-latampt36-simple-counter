import React, { useState } from 'react';
import { App } from './SecondsCounter';
import { Options } from './Options';


const Home = () => {
	const [showOptions, setShowOptions] = useState(false);

	return (
		<>
			<App />
			<Options showOptions={showOptions} setShowOptions={setShowOptions} />
		</>
	);
};

export default Home;
