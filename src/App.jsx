import { useState } from 'react';
import './App.css'
import ButtonContainer from './Components/ButtonContainer'
import Display from './Components/Display'

function App() {
  const [calVal, setCalVal] = useState('');
  const onButonClick = (buttonText) => {
    console.log(buttonText);
    if(buttonText === 'C'){
      setCalVal('');
    } else if(buttonText === '='){
      const result = eval(calVal);
      setCalVal(result);
    } else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }
  return (
    <>
      <div className='calc_wrapper'>
        <Display displayValue = {calVal}/>
        <ButtonContainer onButtonClick = {onButonClick}/>
      </div>
    </>
  )
}

export default App
