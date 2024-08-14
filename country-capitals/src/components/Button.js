import { useState } from "react";

const Button = (props) => {
  const [status, setStatus]= useState('');
  const [optionSelected, setOptionSelected] = useState('');
  const answers = props.answers;
  const checkResponse = ()=>{
    //We need to check here which other option was selected
    let firstItem = sessionStorage.getItem('firstSelected');
    let secondItem = props.value;
    let getObject = answers.filter(item => item.country === firstItem); //it means first selected is a country
    if(getObject.length > 0){
      console.log(getObject[0].capital, secondItem)
      if(getObject[0].capital === secondItem){
        setStatus('correct');
      }
    }
    console.log(getObject);
  } 
  const handleClick =(e) => {
    let selectedButtons = sessionStorage.getItem('CountClicks');
    if(!selectedButtons){
      sessionStorage.setItem('CountClicks', 1);
      sessionStorage.setItem('firstSelected',props.value);
      setStatus('active');
    }else{
      checkResponse();
    }
   
  }
  return(
    <button id={props.value} class={status} onClick={handleClick}>{props.value}</button>
  )
}

export default Button;