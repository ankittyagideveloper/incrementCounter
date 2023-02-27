import { useState, useRef } from "react";
import Timer from "./components/timer";

function App() {
  const timerId = useRef(null);
  const [timer, setTimer] = useState(0);
  const handleStart = () => {
    clearInterval(timerId.current);
    timerId.current = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(timerId.current);
    };
  };
  const handleStop = () => {
    clearInterval(timerId.current);
  };
  const handleClear = () => {
    clearInterval(timerId.current);
    setTimer(0);
  };
  return (
    <div className="flex justify-center items-center h-full flex-col my-16">
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
            const timerId = useRef(null);
            const [timer, setTimer] = useState(0);
            const handleStart = () => {
              clearInterval(timerId.current);
              timerId.current = setInterval(() => {
                setTimer((prevTime) => prevTime + 1);
              }, 1000);
              return () => {
                clearInterval(timerId.current);
              };
            };
            const handleStop = () => {
              clearInterval(timerId.current);
            };
            const handleClear = () => {
              clearInterval(timerId.current);
              setTimer(0);
            };
          
          
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

      <Timer />
    </div>
  );
}

export default App;
