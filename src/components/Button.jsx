import React from 'react'

const Button = ({randomColor, getRandomAll}) => {
    const backgroundObj = {
        backgroundColor: randomColor
    }
  return (
    <div>
        <button 
            className='card_btn' 
            style={backgroundObj}
            onClick={getRandomAll}
        >&#62;</button>
    </div>
  )
}

export default Button