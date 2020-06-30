import React from 'react';
import Card from './card';

export default ({ column }) => (
  <div className="column">
    <div>                                     {/* //cardlisteini ekrana bas// */}
      <h3 id="titleId">{column.title}</h3>
      {column.cards.map((card, cardIndex) => (
        <Card
          card={card}
          cardIndex={cardIndex}
        />
      ))}
    </div>         
       <div>    {/* //yeni card oluştur(otomatik olarak columna eklenecek) */}
      
      
      </div>                    

  </div>
)