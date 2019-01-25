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
        inventory:[]
        
  }
  console.log(this.state.inventory)
}

handleGetInventory() {
  axios.get('http://localhost:4000/api/inventory')
      .then(response => {
        console.log(response)
          
          this.setState({
              inventory:response.data
              
          })
          console.log(this.state.inventory)
      })
  }
  
  render() {
    const products = this.state.inventory.map((product) => 
    
        <div>
        <h4>{product.name}</h4>
        <h5>{product.price}</h5>
        <p>{product.image}</p>
        
        </div>) 
      console.log(products)
    return (
      <div className="App">
        <button onClick={() => this.handleGetInventory()}> get Inventory</button>
        <h1>{products}</h1>
       <Dashboard />
       <Form />
       <Header />
       <Product />
       {products}
      </div>
    );
  }
}

export default App;
