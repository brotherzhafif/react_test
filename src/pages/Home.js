import { useState } from 'react';
import Kotak from '../component/kotak';

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
  let name = document.getElementById('nama')

  return (
    <div className="App">
      <p style={{color:color}}> Home {color} </p>
      <input id='test' onInput={() => setColor(document.getElementById('test').value)}></input>
      <input id='nama' onInput={() => setNama(document.getElementById('nama').value)}></input>

      {
        name.value === 'Admin' ? <Raja/> : <Jelata/>
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
