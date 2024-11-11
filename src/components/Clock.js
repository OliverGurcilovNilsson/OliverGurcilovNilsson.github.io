import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000); // Updates every second
        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);

    // Format time as 12-hour with AM/PM, without seconds
    const formattedTime = time.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'CET'
    });

    return (
        <div style={{ textAlign: 'center', padding: '1rem', fontSize: '2em' }}>
            <h2 style={{ margin: 0 }}>{formattedTime}</h2>
            <p style={{ margin: 0 }}>CET</p>
        </div>
    );
}

export default Clock;