import React,{useEffect, useState} from 'react';
import './App.css';
import Button from './components/Button';
function App() {

 useEffect(()=>{
    fetch('/data/countries.json',
      {
        method:'get'
      }
    )
    .then((result) => result.json())
    .then((result) =>{
      console.log(result);
    })
 },[]);
  return (
    <div className="App">
      <header className="App-header">
        Country Capital Match Game
        <Button></Button>
      </header>
      
    </div>
  );
}

export default App;
