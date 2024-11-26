import { useState } from 'react';
import Kotak from '../component/Kotak';

function Raja()
{
  return <h3>Anda adalah admin</h3>
}
function Jelata()
{
  return <h3>Dasar Rakyat Jelata</h3>
}

function App() {
  const [color, setColor] = useState("");
  const [nama, setNama] = useState("");
  let name = document.getElementById('nama');
  let warna = document.getElementById('test'); 

  return (
    <div className="App">
      <p style={{color:color}}> Home {color} </p>
      <input id='test' onInput={() => setColor(warna.value)}></input>
      <input id='nama' onInput={() => setNama(name.value)}></input>

      {
        name.value === 'Admin' ? <Raja /> : <Jelata />
      }

      <tr>
        <th>
          Nama
        </th>
      </tr>
      <tr>
        <td>
          {nama}
        </td>
      </tr>

      <Kotak/>
    </div>
  );
}

export default App;
