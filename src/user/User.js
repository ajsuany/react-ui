import React from 'react'
import  './User.css'


 function User ({_id,name,address,gender,deleteRow,editRow}){

      

      
   
    return(
        <ul className='user'>
        <span className='user-atrb'>{name}</span>
        <span className='user-atrb'>{address}</span>
        <span className='user-atrb'>{gender}</span>
        <span className='user-edit' onClick = {()=>deleteRow(_id)} > Delete</span>
        <span className='user-delete' onClick = {()=>editRow({_id,name,address,gender})}  > Edit </span>
        
        
       </ul>
    )




}

export default User;