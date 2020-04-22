import React, { Component } from "react"
import  './Home.css'
 

export default class Header extends Component{
    constructor(props){
        super()
        this.state={homeLink : "chenged Link "}
        
    }
  onChangeName(){
  this.props.changeLink(this.state.homeLink)

  }


    render(){
         return(
             <div className='container'>
                 <div className='row'>
                  <button onClick={this.onChangeName.bind(this)}> Header Component
                      </button>  
                        </div>
             </div>
              )
    }
}