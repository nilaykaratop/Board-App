import React from 'react';
import  Card  from './card';
import  Navbar  from './navbar';
import Column from './column';
import card from './card';
import './css/style.css';

export default class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      columns:[
        {
          title:"ÖDEV",
          cards:[
            {
              personName:"Ödev A",
              description:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              personName:"Ödev B",
              description:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              personName:"Ödev c",
              description:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
            }
          ]
        },
        {
          title:"Sınav",
          cards:[
            {
              personName:"Sınav A",
              description:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının",
            },
            {
              personName:"Sınav B",
              description:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının",
            },
            {
              personName:"Sınav C",
              description:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
            }

          ]
        },
        {
          title:"Proje",
          cards:[
            {
              personName:"Proje A",
              description:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              personName:"Proje B",
              description:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının.",
            },
            {
              personName:"Proje C",
              description:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir",
            }
          ]
        }

      ]
    }
    
  }
  render() {
        
    return (
      <div className="App">
        {this.state.columns.map((column, columnIndex) => (
         <Column
           column={column} 
           columnIndex={columnIndex}
            key={columnIndex} 
          />
        ))}
      </div>

    ); 
  }
}

