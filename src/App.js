import React, {useState} from 'react';
import Button from './components/Button.jsx';
import Display from './components/Display.jsx';
import './App.css';

function App() {
  const [time, setTime] = useState({ms: 0, s: 0, m: 0, h: 0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  let updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;

  const run = () => {
    if(updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if(updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if(updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ms: updateMs, s: updateS, m: updateM, h: updateH});
  }

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms: 0, s: 0, m: 0, h: 0});
  };

  const resume = () => start();

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Display time={time} />
          <Button status={status} start={start} stop={stop} reset={reset} resume={resume}/>
        </div>
      </div>
    </div>
  );
}

export default App;
