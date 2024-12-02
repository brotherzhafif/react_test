import { useState } from 'react';
import Navbar from '../component/Navbar';

function Raja()
{
  return <h3>Anda adalah admin</h3>
}
function Jelata()
{
  return <h3>Dasar Rakyat Jelata</h3>
}

function Home() {
  
  const [color, setColor] = useState("");
  const [nama, setNama] = useState("");
  let name = document.getElementById('nama');
  let warna = document.getElementById('test'); 

  
  return (
    <div className="App">
      <p style={{color:color}}> Home {color} </p>
      <input value={color} id='test' onInput={() => setColor(warna.value)}></input>
      <input value={nama} id='nama' onInput={() => setNama(name.value)}></input>

      <tr>
        <th>
          Nama
        </th>
      </tr>
      <tr>
        <td>
          { nama }
        </td>
      </tr>

      <Navbar />
      
      { document.getElementById('nama').value === 'Admin' ? <Raja /> : <Jelata /> }
    </div>
  );
}

export default Home;
