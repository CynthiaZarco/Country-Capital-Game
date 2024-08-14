import { useState } from "react";

const Button = (props) => {
  const [attemp,setAttemp] = useState();
  const answers = props.answers;
  const checkResponse = ()=>{
    //We need to check here which other option was selected
    let firstItem = sessionStorage.getItem('firstSelected');
    let secondItem = props.value;
    let getObject = answers.filter(item => item.country === firstItem); //it means first selected is a country
    if(getObject.length > 0){
      if(getObject[0].capital === secondItem){
        document.getElementById(secondItem).style.backgroundColor='#00FF00';
        document.getElementById(firstItem).style.backgroundColor='#00FF00';
        sessionStorage.removeItem('CountClicks');
      }else{
        document.getElementById(secondItem).style.backgroundColor='#FF0000';
        document.getElementById(firstItem).style.backgroundColor='#FF0000';
        sessionStorage.removeItem('CountClicks');
      }
    }else{
        let getObject = answers.filter(item => item.capital === firstItem); //it means first selected is a capital
        if(getObject[0].country === secondItem){
          document.getElementById(secondItem).style.backgroundColor='#00FF00';
          document.getElementById(firstItem).style.backgroundColor='#00FF00';
          sessionStorage.removeItem('CountClicks');
        }else{
          document.getElementById(secondItem).style.backgroundColor='#FF0000';
          document.getElementById(firstItem).style.backgroundColor='#FF0000';
          sessionStorage.removeItem('CountClicks');
        }
    }
  } 
  const handleClick =() => {
    let selectedButtons = sessionStorage.getItem('CountClicks');
    if(!selectedButtons){
      let attempt = sessionStorage.setItem('attemp',1);
      sessionStorage.setItem('CountClicks', 1);
      sessionStorage.setItem('firstSelected',props.value);
      document.getElementById(props.value).style.backgroundColor='#0000ff';
      setAttemp(attempt);
    }else{
      sessionStorage.getItem('attemp');
      checkResponse();
    }
  }
  return(
    <button id={props.value} onClick={handleClick}>{props.value}</button>
  )
}

export default Button;