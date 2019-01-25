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
        inventory:[],
            name:'',
            price:0,
            image:'',
        
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
  componentDidMount(){
    this.handleGetInventory()
  }

  
  
  render() {
     const mappedInventory = this.state.inventory.map((product) =>{
       return(
         <div>
           <h1>{product.product_name}</h1>
           <h1>{product.product_price}</h1>
           <img alt="" src={product.product_img}></img>
         </div>
       )
     })
      
    return (
      <div className="App">
        
       
       <Dashboard />
       <Form />
       <Header />
       <Product />
       
       {mappedInventory}
      </div>
    );
  }
}

export default App;
