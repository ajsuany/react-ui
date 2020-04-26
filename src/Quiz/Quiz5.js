import React, {Component} from 'react'
import './Home.css'



export default class Quiz5 extends Component{
                                
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
                    
                    return(<div> 
                               <p> Q5. 2+4= ? </p>
                                <div className="option">
                                <div onClick={this.selectedOpt} > 3 </div>  
                                <div onClick={this.selectedOpt} > 4 </div>  
                                <div onClick={this.selectedOpt} > 5 </div>  
                                <div onClick={this.selectedOpt} > 6 </div>
                                </div>
                    <div>Scored Mark:{this.state.score}</div>
                                 <div>
                                     <button onClick={this.continue}>
                                       Next Quiz
                                     </button>
                                     <button onClick={this.back}>
                                         Back Quiz
                                     </button>
                                 </div>
                            </div>
                          )
                    }

}

