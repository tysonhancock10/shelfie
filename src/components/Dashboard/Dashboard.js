import React, { Component } from 'react'
class Form extends Component {
    constructor() {
        super()
        this.state = {
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


    }


    render() {
        // let DisplayInventory = this.props.getInventory().map(() => {
        
        return (
             (<div>
                Dashboard
            </div>)
        )
             }
        
        
        
}
export default Form