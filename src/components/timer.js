import React, { useEffect, useRef, useState } from "react";

function Timer() {
  const timerId = useRef(null);
  const [timer, setTimer] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  useEffect(() => {
    if (startTimer) {
      timerId.current = setTimeout(() => {
        setTimer(timer + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId.current);
    };
  }, [timer, startTimer]);

  const handleStart = () => {
    setStartTimer(true);
  };
  const handleStop = () => {
    setStartTimer(false);
    clearInterval(timerId.current);
  };
  const handleClear = () => {
    clearInterval(timerId.current);
    setTimer(0);
  };
  return (
    <div className="flex justify-center items-center h-full flex-col my-16">
      <div>By Using UseEffect and setTimeout web api</div>
      <div className="text-3xl">{timer}</div>
      <div className="">
        <button
          className="m-2 bg-black text-white p-2 rounded-lg w-20 hover:text-black hover:bg-white hover:border border-stone-900"
          onClick={() => handleStart()}
        >
          Start
        </button>
        <button
          className="m-2 bg-black text-white p-2 rounded-lg w-20 hover:text-black hover:bg-white hover:border border-stone-900"
          onClick={() => handleStop()}
        >
          Stop
        </button>
        <button
          className="m-2 bg-black text-white p-2 rounded-lg w-20 hover:text-black hover:bg-white hover:border border-stone-900"
          onClick={() => handleClear()}
        >
          Clear
        </button>
      </div>
      <div>
        <h1 className="text-3xl font-bold my-3">How to create a Timer</h1>
      </div>
      <pre>
        <code class="language-html ">
          {`
    function Timer() {
        const timerId = useRef(null);
        const [timer, setTimer] = useState(0);
        const [startTimer, setStartTimer] = useState(false);
        useEffect(() => {
          if (startTimer) {
            timerId.current = setTimeout(() => {
              setTimer(timer + 1);
            }, 1000);
          }
      
          return () => {
            clearTimeout(timerId.current);
          };
        }, [timer, startTimer]);
      
        const handleStart = () => {
          setStartTimer(true);
        };
        const handleStop = () => {
          setStartTimer(false);
          clearInterval(timerId.current);
        };
        const handleClear = () => {
          clearInterval(timerId.current);
          setTimer(0);
        };
        return (
          <div className="flex justify-center items-center h-full flex-col my-16">
            <div>By Using UseEffect and setTimeout web api</div>
            <div className="text-3xl">{timer}</div>
            <div className="">
              <button
                className="m-2 bg-black text-white p-2 rounded-lg w-20 hover:text-black hover:bg-white hover:border border-stone-900"
                onClick={() => handleStart()}
              >
                Start
              </button>
              <button
                className="m-2 bg-black text-white p-2 rounded-lg w-20 hover:text-black hover:bg-white hover:border border-stone-900"
                onClick={() => handleStop()}
              >
                Stop
              </button>
              <button
                className="m-2 bg-black text-white p-2 rounded-lg w-20 hover:text-black hover:bg-white hover:border border-stone-900"
                onClick={() => handleClear()}
              >
                Clear
              </button>
            </div>`}
        </code>
      </pre>
    </div>
  );
}

export default Timer;
