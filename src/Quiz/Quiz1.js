import React, {Component} from 'react'
import './Home.css'



export default class Quiz1 extends Component{
                    
  constructor(){
    super()
    this.state = {
        ans : 6,
        score: 0

    }

}
selectedOpt = (event) =>{
     let {ans,score} = this.state
     let temp =parseInt(event.target.innerText) 
     if (temp === ans)
     {
          score+=1
     }else{
         score-=1
     }
     this.props.calculation(score)
     this.setState({score})
} 



              
           continue = () => {

               this.props.next()
           }

           back = () => {
               console.log("back fun is called",this.props)
            this.props.backs()
        }

             render(){
                    
                    return(<div className="container"> 
                                 <p className="mark" > Q1. 2+4= ? </p>
                                <div className="option">
                                <div className = 'opt' onClick={this.selectedOpt} > 3 </div>  
                                <div className = 'opt' onClick={this.selectedOpt} > 4 </div>  
                                <div  className = 'opt'onClick={this.selectedOpt} > 5 </div>  
                                <div  className = 'opt' onClick={this.selectedOpt} > 6 </div>
                                </div>
                                <div className="mark">Scored Mark:{this.state.score}</div> 
                                <div className='submt'>
                                       <button className='btn' onClick={this.continue}>
                                         Next Quiz
                                       </button>
                                     <button className='btn' onClick={this.back}>
                                         Back Quiz
                                     </button>
                                 </div>
                            </div>
                          )
                    }

}

