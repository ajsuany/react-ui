import React from 'react'
import './ListItems.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function ListItems (props){
    const items = props.listOfItem
    console.log("in Listitem cpm",items)
    const listitem = items.map((item,index) =>{
             return <div className="list" key={item.key}>
                 <p><input type="text" id={item.text} value={item.text}
                 onChange={(e)=>props.setUpdate(e.target.value,item.key)}/>
                 <span>
                     <FontAwesomeIcon className='faicons' icon='trash'
                     onClick={() => props.deletItem(item.key)}/>
                 </span>
                 
                 </p>
                    </div>
})

return(
             <div>
                  {listitem}
             </div>
)
    
}
export default ListItems