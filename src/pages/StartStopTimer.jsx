import React, { useEffect, useState } from 'react'

export default function StartStopTimer() {
    const [active, setActive] = useState(false);
    const [count, setCount] = useState(0);
    const [timeInterval, setTimeInterval] = useState('');

    const handleStart = () => {
        setActive(true)
    }
    const handleStop = () => {
        setActive(false)
    }
    useEffect(() => {
      
        if (active) {
            setTimeInterval(setInterval(() => {
                setCount((prev) => prev + 1)
            }, 1000))
        }
        else {
            clearInterval(timeInterval);
        }
    }, [active])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
