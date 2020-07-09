import React from 'react';
import Card from './card';

export default class Column extends React.PureComponent {
  render() {
    return (
      <div className="column-list" >
        {
          this.props.columns.map((column, columnIndex) => {
            return (
              <div className="column" key={columnIndex} >
                <h3 id="title-id">{column.title}</h3>
                <Card
                  cards={column.cards}
                />
              </div>
            )
          })
        }
      </div>

    )
  }
}
