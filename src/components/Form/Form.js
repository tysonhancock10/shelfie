import React, {Component} from 'react'



class Form extends Component{
    constructor(){
        super()
        this.state= {
            nameInput:'',
            priceInput:0,
            imageInput:'',
            
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
                <input onChange={(e) => {
                    this.handleClear(e.target.value)
                }}></input>
                <button onClick={() => {this.handleClear()}}>cancel</button>
                <button >Add inventory</button>
            </div>
        )
    }
}
export default Form