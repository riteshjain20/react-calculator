import React from 'react'
import Button from './Button'

const ButtonContainer = ({onButtonClick}) => {
  const buttonNames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <>
      <div id="btn_container">
        {/* <Button/> */}
        {buttonNames.map((buttonName) => (
          <button className='btn' onClick={()=>onButtonClick(buttonName)}>
            {buttonName}
          </button>
        ))}
      </div>
    </>
  )
}

export default ButtonContainer