import './App.css';
import Login from './components/login';
import Nasa from './components/nasa';

import {useState} from 'react'

const to = 5000
export default function App() {
  const [anakKu, setAnakKu] = useState("tunggu perintah anakku ....")
  const [rt, setRt] = useState("tunggu perintah rt anakku ....")

  const dariAnakKu = (e) => {
    setTimeout(() => {
      setAnakKu(e)
    }, to);
  }

  const onPerintahKu = (e) => {
    console.log(e.target.value)
    setRt(e.target.value)
  }

  return (
    <div className="App">
      Hallo React
      <Login
        nama="props"
        untukMamakKu={dariAnakKu}
        perintahRealtime={onPerintahKu}
      />
      <br>
      </br>
      {anakKu}
      <br>
      </br>
      {rt}
      <br></br>
      <br></br>
      <br></br>
      <Nasa/>
    </div>
  );
}


