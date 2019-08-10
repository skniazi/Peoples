import React from 'react';
import '../card/card.styles.css';

export const Card = (props) => (
    
       
            <div className='card-container'>
                <img alt='people' src={`https://robohash.org/${props.names.id}?set=set2&size=180x180`} />
                <h2>{props.names.name}</h2>
                <p>{props.names.email}</p>
             </div>
        
        
    
)