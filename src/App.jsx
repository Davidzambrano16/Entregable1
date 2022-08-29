import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotebox from './quotebox.json'

function App() {
  
  console.log(quotebox)

  const [index, setIndex] = useState(0)
  const author = quotebox[0].author

  function change(){
    setIndex(1)
  }
  
  return (
    <div className="App">
      <div className='card'>
        <p className="card--phrase">
          {quotebox[index].quote} {quotebox[index].author}
        </p>
        <button onClick={change}>next</button>
      </div>
    </div>
  )
}

export default App
