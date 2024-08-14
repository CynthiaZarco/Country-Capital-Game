import React,{useEffect, useState} from 'react';
import './App.css';
import Button from './components/Button';
function App() {
  const [countryData,setCountryData] = useState([]); //always have the correct answers
  const [shuffleCountriesList, setShuffleCountriesList]= useState([]);
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    setShuffleCountriesList(array);
}
  const mergeCountryAndCapitals = (countries) => {
    let orderedData = [];
    let tempID = 0;
    let mergedList = [];
     countries.map(item => {
      let currentKey = Object.keys(item);
      let currentValue = Object.values(item);
      
      if(mergedList.indexOf(currentKey) === -1){
        mergedList.push(currentKey);
      }  
      if(mergedList.indexOf(currentValue) === -1){
        mergedList.push(currentValue);
      }
      //lets order object
      orderedData.push({key: tempID+1, country: currentKey.toString(), capital: currentValue.toString()});
    });
    setCountryData(orderedData);
    shuffleArray(mergedList); // Send unified data to another function that suffle all
  }
 useEffect(() => {
    fetch('/data/countries.json',
      {
        method:'get'
      }
    )
    .then((result) => result.json())
    .then((result) => {
      //INFO: We will keep one state to know countries answers
      mergeCountryAndCapitals(result);
      //setCountryData(result);
    });
    sessionStorage.removeItem('firstSelected');
    sessionStorage.removeItem('CountClicks');
 },[]);

  return (
    <div className="App">
      <header className="App-header">
        Country Capital Match Game
        {
          shuffleCountriesList.length > 0 ?
          shuffleCountriesList.map(item => {
            return (
              <Button key={item.toString()} answers={countryData} value={item.toString()}/>
            )
          })
          :
          null
        }
       
      </header>
      
    </div>
  );
}

export default App;
