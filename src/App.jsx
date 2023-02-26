import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color'

function App() {
  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
  
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  const [randomQuote, setRandomQuote] = useState(firstQuote)
  const [randomColor, setRandomColor] = useState(firstColor)

  const backgroundObject = {
    backgroundColor:randomColor
  }

  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }

  let newArray = []
  for (let i = 0; i < quotes.length; i++) {
    newArray.push(quotes[i].author)
    // console.log(quotes[i].author);
  }
  console.log(newArray);
  // const uniqueArray = [...new Set(newArray)];
  // console.log(uniqueArray);

  return (
    <div style={backgroundObject} className="App">
      <QuoteBox 
        getRandomAll={getRandomAll}
        randomQuote={randomQuote}
        randomColor={randomColor} 
      />
    </div>
    
  )
}

export default App
