import React, { PureComponent } from "react";
import './Header.css'


export default class Header extends PureComponent {


render(){
   
    return(
        <div className='container'>
         <div className='h-icon'>  Icon</div>
          <div className='s-data'>
            <span className='a-data'>
                About
            </span>
            <span className='c-data'>
                Contact
            </span>
          </div>
        </div>
         
    )

}


}