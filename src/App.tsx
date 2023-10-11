

import './App.css';
import ArryExample from './components/ArryExample';
import Home from './components/Home';
import Instructor from './components/Instructor';

function App() {
  let name="enes",surname="yavuz", age=36 , askerlik=false;

  const obje ={
    firstName:"sana ne",
    lastName:"saman ye",
  }

  const Arrobje = [
    {
      firstName:"can ",
      lastName:"yücel",
    },
    {
      firstName:"necip fazıl",
      lastName:"kısa kürek",
    },
    {
      firstName:"nazım ",
      lastName:"hikmet",
    },
  ]
  

  return (
    <div className="App">
      
      <Home name={name} surname={surname} age={age} askerlik={askerlik}  />
      <Instructor nesne={obje}/>
      <ArryExample arrNesne ={Arrobje}/>

    </div>
  );
}

export default App;
