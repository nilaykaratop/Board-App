import React from 'react';

export default class Navbar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { columnTitle: '' };
    }
    handleColumnTitle(value) {
        this.setState({ columnTitle: value });
        this.handleColumnTitle = this.handleColumnTitle.bind(this);
    }
    addColumn(e) {
        e.preventDefault();
        const inp = document.getElementById('add-column-input');
        const val = inp.value;
        this.props.addColumn(val);
    }
    addCard(e) {
        e.preventDefault();
        const topic = document.getElementById('add-card-topic-input');
        const vall = topic.value;
        const desc=document.getElementById('add-card-desc-input');
        const descv=desc.value;
        this.props.addCard(vall,descv);

    }
    state = { showColumnForm: false }
    showColumnForm = () => {
        return (
            <div className="form">
                <form className="" onSubmit={this.addColumn.bind(this)}>
                    <div>{this.state.columnTitle}</div>
                    <input id="add-column-input" type="text" onChange={(e) => this.handleColumnTitle(e.target.value)} placeholder="Column Başlığı Giriniz" />
                    <button className="add-column-btn" type="submit" onClick={this.addColumn.bind(this) }>{'Column Ekle'}</button>
                    <button onClick={() => this.setState({ showColumnForm: false })} type="submit">{'Kapat'}</button>
                </form>
            </div>
        );
    }
    state = { showCardForm: false }
    showCardForm = () => {
        return (
            <div className="form">
                <form className="i" onSubmit={this.addCard.bind(this)} >
                    <input id="add-card-topic-input" type="text" className="" placeholder="Card Başlığı Giriniz" />
                    <input id="add-card-desc-input" type="text" className="" placeholder="Açıklama Giriniz" />
                    <button id="add-card-btn" type="submit" onClick={this.addCard.bind(this)}>{'Card Oluştur'}</button>
                    <button onClick={() => this.setState({ showCardForm: false })} type="submit">{'Kapat'}</button>
                </form>
            </div>
        );
    }

    render() {

        return (
            <div className='navbar'>

                <div className="add-column">
                    <button onClick={() => this.setState({ showColumnForm: true })}>Yeni Column</button>
                    {this.state.showColumnForm ? this.showColumnForm() : null}
                </div>
                <h3>BoardApp</h3>
                <div className="add-card">
                    <button onClick={() => this.setState({ showCardForm: true })} >Yeni Card</button>
                    {this.state.showCardForm ? this.showCardForm() : null}
                </div>
                {/* column numarası sorucak yanı column listesini
                 bilmemiz gerek column listesi appde tutulması lazım */}
            </div>
        )

    }
}
