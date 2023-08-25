
export default function CardList(props) {
    console.log(`in cardlist ${props}`);
      return(
      <div className='card-list'>
      {
        props.cards.map(card => <Card key={card.id} {...card} />)
      }
      </div> 
      )
  } 

function Card (props) { 
    return (
    <div className='card'> 
  
      <img alt="avatar" style={{ width: '150px' }} src={props.avatar_url} /> 
  
      <div style={{fontWeight: 'bold' ,backgroundColor:'white' , width:'10rem' }}> 
      Name:
        <div style={{color:'red'}}>
          {console.log(props.name)}
        {props.name}
        </div>
        <br/> 
        <a href={props.blog}>Blog Link:</a>
      
      </div> 
  
    </div>
  
    )
  }