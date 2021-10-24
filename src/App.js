import { useState, useEffect, useRef } from 'react';
import { Bathtub } from './components/Bathtub';
import './App.css';

function App() {
  const [waterLevel, setWaterLevel] = useState(0);
  const [waterToggle, setWaterToggle] = useState('off');

  let interval = useRef(null)

  const startIncreaseWaterLevel = () => {
    if(waterLevel < 5) {
      setWaterToggle('increase');
      setTimeout(() => {
        setWaterLevel(waterLevel+1);
      }, 2000);
    }
  }

  const startDecreaseWaterLevel = () => {
    if(waterLevel > 0) {
      setWaterToggle('decrease');
      setTimeout(() => {
        setWaterLevel(waterLevel - 1);
      }, 2000)
    }
  }

  const waterChanger = () => {
    
      if(waterToggle === 'increase' && waterLevel < 5) {
        setWaterLevel(waterLevel + 1);
      }
      else if(waterToggle === 'decrease' && waterLevel > 0) {
        setWaterLevel(waterLevel - 1);
      }
      else {
        setWaterToggle('off');
        clearInterval(interval.current)
      }
  }

  useEffect(() => {
    if (waterToggle === 'off') return null;

    interval.current = setInterval(() => {
      waterChanger();
    }, 2000);

    return () => clearInterval(interval.current)
  },[waterLevel, waterToggle]);

  return (
    <div className="App">
      <Bathtub waterLevel={waterLevel} />
      <div className="controls">
        <button onClick={startIncreaseWaterLevel}>increaseWaterLevel</button>
        <button onClick={startDecreaseWaterLevel}>decreaseWaterLevel</button>
      </div>
      <div className="counter">
        <h2>
          Water Counter: {waterLevel}
        </h2>
      </div>
    </div>
  );
}

export default App;
