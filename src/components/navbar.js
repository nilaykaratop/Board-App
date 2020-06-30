import React from 'react';

export default class Navbar extends React.PureComponent{
    render(){
        return(
            <div>
                <div>Column Oluştur</div> 
                <div>Card Oluştur</div> 
                {/* column numarası sorucak yanı column listesini
                 bilmemiz gerek column listesi appde tutulması lazım */}
            </div>
        )
    }
}
