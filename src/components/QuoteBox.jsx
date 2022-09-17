import React from 'react'
import Button from './Button'

const QuoteBox = ({randomQuote, randomColor, getRandomAll}) => {
    const colorObj = {
        color: randomColor
    }

  return (
    <article style={colorObj} className='card'>
        <i class='bx-pull-left bx-lg bx bxs-quote-left'></i>
        <p className='card_quote'>{randomQuote.quote}</p>
        <h1 className='card_author'>{randomQuote.author}</h1>
        <Button
            randomColor={randomColor}
            getRandomAll={getRandomAll}
        />
    </article>
  )
}

export default QuoteBox