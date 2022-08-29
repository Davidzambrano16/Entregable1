import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotebox from './quotebox.json'

function App() {
  
  console.log(quotebox)

  const randomIndex = Math.floor(Math.random() * quotebox.length )
  const [index, setIndex] = useState(randomIndex)

  const color = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#008F7A"]
  const randomColor = Math.floor(Math.random() * color.length )

  function change(){
    const randomIndex = Math.floor(Math.random() * quotebox.length )
    const randomColor = Math.floor(Math.random() * color.length )
    setIndex(randomIndex)
  }

  document.body.style = `background : ${color[randomColor]}`
  
  return (
    <div className="App">
      <div className='card'>
        <p className="card--phrase" style={{color: color[randomColor] }} >
        <i class="fa-solid fa-quote-left"></i>
          {quotebox[index].quote}
        </p>
        <div className='card--author' style={{color: color[randomColor] }}>
          <p>{quotebox[index].author}</p>
          <button onClick={change}  className="buttonChange" style={{color: color[randomColor] }} ><i className="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  )
}

export default App
