import { useState } from 'react'; 
import './App.css'
import CardList from './CardList.js'
import Form from './Form.js'

function App() { 
    const [cards, setCards] = useState([]) 

    const addNewCard = cardInfo => {
      console.log(cardInfo); 
      setCards(cards.concat(cardInfo))
      console.log(cards);
     }

     return (
     <div className='app'> 
      <Form onSubmit={addNewCard} /> 
      
      <CardList cards={cards} /> 
    </div>
    )
  } 
     
export default App;