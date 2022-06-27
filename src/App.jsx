import { useState } from 'react'
import './App.css'
import quotes from './quotes.json';


const colors = ["#845EC2","#D65DB1","#FF6F91","#FF9671", "#FFC75F","#F9F871","#2C73D2", "#0081CF","#0089BA","#008E9B","#008F7A"]


function App() {
  
  const random = Math.floor(Math.random()* quotes.length)
  const [index, setIndex] = useState(random);

  const changeQuote = () =>{
    const random  = Math.floor(Math.random()* quotes.length);
    setIndex(random);

  };

  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex];

  document.body.style = `background: ${color}`;

  return(

    <div className="App">
        <div className="card" style={{color: color}}>
          <h1>
          <i class="fa-solid fa-quote-left"></i> {quotes[index].quote} <i class="fa-solid fa-quote-right"></i>
          </h1>

              <ul>
                    <li>   {quotes[index].author}</li>

              </ul>

              <button onClick={changeQuote}>
              <i className="buttom" style ={{color:color}}><i className="fa-solid fa-forward"></i></i>
              </button>
          
        </div>




    </div>



  );

}

export default App
