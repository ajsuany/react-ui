import React, {PureComponent} from "react";
import Form from './form/Form';
import Header from './header/Header';
import UserList from './userlist/UserList';
import axios from 'axios'



export default class App extends PureComponent{
                         constructor(){
                             super()
                             this.state = {
                                 list : [],
                                 editRow :[]
                             }
                         }
                 

                responseData = (newUser) =>{
                    let {list} = this.state
                    console.log("newUser >>>>>",newUser)
                   const userList = [ ...list,newUser]
                   console.log("userlist >>>>>",userList)
                   this.setState({list:userList})
                    }

                    editList =(row) =>{
                     console.log("id passed into App",row)
                     this.setState({editRow :row })
                    }

                    deleteList = (Id) => {
                        console.log("App  id value passed ",Id)
                     axios.delete(`http://localhost:3000/users/${Id}`)
                     .then(response => {
                        console.log("App  id value passed ",response.data) 
                       this.setState({list : this.state.list.filter(user => user._id !==Id)}) 
                     }).catch(error => {
                         console.log(error)
                     })
                     
                    }
   
                loadDataList(){
                    console.log("get method call")
                    axios.get('http://localhost:3000/users/').then(response =>{
                        this.setState({  list : response.data})
                    }).catch(error =>{
                        console.log(error)
                    })
            }

        componentDidMount(){
                  console.log("component did mount")
                  this.loadDataList()
                }

    render () {
        console.log("App list",this.state.list)
        return (
            <div>
                   <Header/>
                   <Form responseData ={this.responseData}
                         editRow = {this.state.editRow}/>
                   <UserList list ={this.state.list}
                          deleteList ={this.deleteList}
                          editList={this.editList}/>
    </div>
        )
    }
}