import React, { useState, useEffect } from "react";

const DateTime = () => {
	const [date, setDate] = useState(new Date());
	const options = {
		weekday: "long",
		month: "long",
		day: "2-digit",
	};

	useEffect(() => {
		var timer = setInterval(() => setDate(new Date()), 1000 *  60);
		return function cleanup() {
			clearInterval(timer);
		};
	});

	return (
		<div className='date-section'>
            <p className='date-info'>{date.toLocaleDateString(undefined, options)}</p>
			<p className='time-info'>{date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
		</div>
	);
};

export default DateTime;
