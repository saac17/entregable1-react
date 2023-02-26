import React from 'react'

const Button = ({randomColor, getRandomAll}) => {
    const backgroundObj = {
        backgroundColor: randomColor
    }
  return (
    <>
        <button 
            className='card_btn' 
            style={backgroundObj}
            onClick={getRandomAll}
        >&#62;</button>
    </>
  )
}

export default Button