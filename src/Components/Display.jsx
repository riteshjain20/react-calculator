import React from 'react'

const Display = ({ displayValue }) => {
  return (
    <>
      <input type="text" id='display' value={displayValue} readOnly/>
    </>
  )
}

export default Display