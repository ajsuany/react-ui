import React, { Component } from "react"
import './TodoList.css'
import ListItems from './ListItems'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)


export default class ToDoList extends Component{
    constructor(){
        super()
        this.state ={
            item: [],
            currentItem:{
                text :"",
                key :""
            }
        }
    }
    handleInput=(event)=>{
        console.log("onchange",event.target.value)
        this.setState({
            currentItem:{
                text : event.target.value,
                key : Date.now()
            }
        })
    }
    addItem = (event) =>{
        event.preventDefault();
        const newItems = this.state.currentItem
        console.log("after add",newItems)
        if(newItems.text!==""){
            const newItem =[...this.state.item,newItems]
            this.setState({
                item : newItem,
                currentItem : {
                    text : "",
                    key : ""
                }
            })
        }
    }
    deletItem = (key) => {
        const filteredItems= this.state.item.filter(items =>items.key!==key)
        this.setState({
            item : filteredItems
        })
    }
    setUpdate=(text,key)=>{
        const items = this.state.item
        items.map(item=>{
            if(item.key===key){
                item.text=text
            }
        })
    this.setState({
        items : items
    })
    }

render(){

     return(
   <div className="App">
        <header>
                <form id="to-do-form" onSubmit={this.addItem}>
                    <input type="text" placeholder="Enter Text" 
                    value={ this.state.currentItem.text}
                    onChange={this.handleInput}/>
                    <button type="submit">Add </button>
                </form>

        </header>
        <ListItems listOfItem={this.state.item}
        deletItem={this.deletItem}
        setUpdate={this.setUpdate}/>
   </div>
        

            )
     }
}




