import React from 'react';
import Card from './card';
import Navbar from './navbar';
import Column from './column';
import './css/style.css';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          
          title: "ÖDEV",
          cards: [
            {
              topicName: "Ödev A",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              topicName: "Ödev B",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              topicName: "Ödev c",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
            }
          ]
        },
        {
          
          title: "SINAV",
          cards: [
            {
              topicName: "Sınav A",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının",
            },
            {
              topicName: "Sınav B",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının",
            },
            {
              topicName: "Sınav C",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
            }

          ]
        },
        {
          
          title: "PROJE",
          cards: [
            {
              topicName: "Proje A",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              topicName: "Proje B",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              topicName: "Proje C",
              description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
            }
          ]
        }

      ]
    }
    this.addColumn = this.addColumn.bind(this);
     this.addCard=this.addCard.bind(this);
  }

  addColumn(val) {
    let updateColumns = this.state.columns;
    updateColumns.push({ title: val, cards: [] });
    this.setState({ columns: updateColumns });
    console.log(updateColumns);
    
  }
   addCard(vall,descv){
    let updateCards= this.state.columns;
    updateCards.push({topicName:vall,description:descv});
     this.setState({cards:updateCards});
     console.log(updateCards);
   }

  render() {

    return (
      <div className="App">
        <Navbar addColumn={this.addColumn}
          addCard={this.addCard} 
        />
        <Column
          columns={this.state.columns}
        />
      </div>

    );
  }
}

