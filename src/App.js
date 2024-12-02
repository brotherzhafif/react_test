import './App.css';
import { useState } from 'react';
import Navbar from './component/Navbar';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  const [notif, setNotif] = useState("");

  if (count < 0)
  {
    setNotif("Angka Tidak Boleh Kurang dari 0");
    setCount(0);
  }
  else if (count > 10)
  {
    setNotif("Angka Tidak Boleh Lebih dari 10");
    setCount(10);
  }

  return (
    <div className="App">
      <Navbar />

      <p> Clicked {count} Times</p>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
      <button onClick={() => setCount(count - 1)}>- 1</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <p style={{color : color}}> Input {color}</p>
      <input id='hitam' onInput={() => setColor(document.getElementById('hitam').value)}></input>
      <p>{notif}</p>
    </div>
  );
}

export default App;
