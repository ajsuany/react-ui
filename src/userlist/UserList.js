import React, { PureComponent } from "react"
import User from "../user/User"


export default class UserList extends PureComponent {
         
    deleteRow =(id) => {
        console.log("userlist id value passed ",id)
        this.props.deleteList(id)
    }
       
    editRow =(id) => {
        console.log("editlist id value passed ",id)
        this.props.editList(id)
    }
render(){
     //console.log("UserList props >>>", this.props.list)
     
    return(
           <li>
               { this.props.list.map(data => <User key={data._id} {...data} deleteRow={this.deleteRow} editRow={this.editRow}/>)}
           </li>
           
           

    )

}


}