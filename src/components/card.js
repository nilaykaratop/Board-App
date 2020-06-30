import React from 'react';


export default ({card}) =>(
    <div className="card">
       <div className="card-personName">{card.personName} </div>  
       <div className="card-description">{card.description}</div> 
       <input type="checkbox" id="checkId"></input>
    </div>
    )