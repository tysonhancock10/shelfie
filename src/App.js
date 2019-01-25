import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import './App.css';
import axios from 'axios'


class App extends Component {
  constructor(props){
    super(props
      )
      this.state= {
        inventory:[
          { id:1,
            name: 'soccerball',
            price: 22,
            image: ""

        },
        {
          id:2,
          name: 'basketball',
          price: 20,
          image:""
        }
      ]
  }
  console.log(this.state.inventory)
}

handleGetInventory() {
  axios.get('/api/inventory')
      .then(response => {
          
          this.setState({
              inventory: response.data
          })
      })
  }
  
  render() {

 

    return (
      <div className="App">
        <button
              onClick={() => this.handleGetInventory()}
              
            >get inventory</button>
       <Dashboard />
       <Form />
       <Header />
       <Product />
      </div>
    );
  }
}

export default App;
