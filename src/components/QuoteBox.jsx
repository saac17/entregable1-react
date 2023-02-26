import React from 'react'
import Button from './Button'

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {
  let URL = 'https://i.pinimg.com/236x/ff/f5/8b/fff58bbbbf1242055d393db0f591d636.jpg'
  const colorObj = {
    color: randomColor,
    transition: '.5s'
  }

  return (
    <article style={colorObj} className='card'>
      <i className='bx bxs-quote-left bx2'></i>
      <div className='text'>
        <i className='bx bxs-quote-right bx1'></i>
        <div>
          <p className='card_quote'>{randomQuote.quote}</p>
          <h1 className='card_author'>- {randomQuote.author}</h1>
        </div>
        <Button
              randomColor={randomColor}
              getRandomAll={getRandomAll}
          />
      </div>
    </article>
  )
}

export default QuoteBox