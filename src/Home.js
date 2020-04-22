import React, { Component } from "react"
import  './Home.css'
import Header from './Header'

 

export default class Home extends Component{
              constructor(){
                  super()
                    this.state ={
                        homeLink :"Home"
                    }
              }


onChangeLinkName(newName){

       this.setState({ homeLink : newName  })
    }
       
    render(){
        console.log(this.state)
         return(
             <div className='container'>
                 <div className='row'>
                 
                 <div>{this.state.homeLink}</div>
                 <Header changeLink={this.onChangeLinkName.bind(this)}/>
                
                </div>
                 
               
             </div>
              )
    }
}