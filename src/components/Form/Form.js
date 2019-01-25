import React, {Component} from 'react'
import axios from 'axios'


class Form extends Component{
    constructor(){
        super()
        this.state= {
            inventory:[],
            name:'',
            price:0,
            image:'',
            
        }
    }

    handleNameInput(value){
    this.setState({
        nameInput: value
    })

    }

    handlePriceInput(value){
        this.setState({
            priceInput:value
        })
    }

    handleImageInput(value){
        this.setState({
            imageInput: value
        })
    }

    handleClear(){
        this.setState({
        inventory: [],
        nameInput: '',
        priceInput: '',
        imageInput: ''
    })
    }
    handleAddInventory(){
        const bodyObj = {
          product_name: this.state.name, 
          product_price: this.state.price,
          product_img: this.state.image
        }
        axios.post('http://localhost:4000/api/inventory', bodyObj)
        .then(response => { 
          this.setState({
            inventory: response.data
          })
        })
      }
  
    

    render(){
        
        // let DisplayInventory = this.props.getInventory().map(() => {
        // return ()
        // }
        
        return(
            <div>
               <input onChange={(e) => {
                    this.handleNameInput(e.target.value)
                }}
                    value={this.state.playerInput}
                    placeholder={'Add Name'}>
                </input>
                <input onChange={(e) =>{
                    this.handleImageInput(e.target.value)
                }}></input>
                <input onChange={(e) =>{
                    this.handlePriceInput(e.target.value)
                }}></input>
                
                <button onClick={() => {this.handleClear()}}>cancel</button>
                <button onClick={() => {this.handleAddInventory()}} >Add inventory</button>
            
            </div>
        )
    }
}
export default Form