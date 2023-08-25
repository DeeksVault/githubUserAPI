import { useState } from "react";
import axios from 'axios';

export default function Form(props) { 
    const [username, setUsername] = useState('') 
  
    console.log("hi form");
  
    const handleSubmit = event => { 
      event.preventDefault();
      
      axios.get(`https://api.github.com/users/${username}`)
      .then(resp => { 
        props.onSubmit(resp.data);
        setUsername('') 
      }
    ).catch(
      (err) => {
        throw new Error(err)
      }
    );
  
    console.log("form Submitted");
    }
  
  
  
     return (
     <div className='form'>
      <form onSubmit={handleSubmit}> 
      <input type="text" 
        value={username} 
        onChange={event =>{
            console.log(username)
            setUsername(event.target.value)
          } 
          
        } 
        placeholder="GitHub username" required 
      /> 
      <button type="submit">Add card</button> 
     </form>
     </div>
     ) 
    
    } 
     