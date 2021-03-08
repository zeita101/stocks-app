import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import Header from './components/Header';

export default class App extends Component {

  state = {
    stock: {
      companyName: "",
      change: "",
      high: "",
      low: "",

    }
  }

  componentDidMount() {
    axios.get('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_21af14242b3d418e86d98f78bef7d5c5')
      .then(data => this.setState({ stocks: data.data }))
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header />

        <div className="display-stock-data">
          <h2 style={{ textAlign: 'center' }}>
            {this.state.stocks.companyName}&nbsp;
            {/* {this.state.currentUser.name.first}&nbsp;
            {this.state.currentUser.name.last}&nbsp; */}
          </h2>

        </div>


      </div>





    )
  }

}

//API_KEY=pk_21af14242b3d418e86d98f78bef7d5c5