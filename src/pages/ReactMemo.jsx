import React, { useState, memo, useCallback } from 'react';

export default function ReactMemo() {
    const [state, setState] = useState(true);

    const handleToggle = useCallback(() => {
        setState(!state)
    }, [])

    const greek = () => {
        console.log("Good Morning");
    };

    return (
        <div>
            <button onClick={handleToggle}>Toggle</button>
            <MemoizedTest greek={greek} />
        </div>
    );
}

const Test = (props) => {
    console.log("helllll");
    return <div>Test Component</div>;
};

const MemoizedTest = memo(Test);
