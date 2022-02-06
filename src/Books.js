import { useState } from 'react';
import { data } from './data';
import './App.css';
import Buttons from './Buttons';

function App() {
  const [state, setState] = useState(data);
  const [showMore, setShowMore] = useState(false);
  const sorting = (genre)=>{
    const newBook = data.filter(element=>
     element.genre === genre);
     setState(newBook);
  }

   return (
    <div  className='book'>
      <div className='groopButton'>
      <h1>Каталог библиотеки</h1>
      </div>
      <div className='groopButton'>
              <Buttons anyword = {sorting}/>
      </div>
    <div className='App'>
      {state.map((item =>{
        const {id,author, title, describe, image} = item;
        return(
          <div className='card' key={id}>
            <h4>{author} </h4>
            <h2>{title} </h2>
            <img src={image} alt='pictire'/>
            <p>{showMore? describe: describe.substring(0, 150) + '...'}  
            <button onClick={()=> setShowMore(!showMore)} className="change1">{showMore? "Показать меньше": "Показать больше"} </button>
            </p>
          </div>
        
        )
      }))}
    </div>
    </div>
  );
}

export default App;
