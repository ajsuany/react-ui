import React, {Component} from 'react'
import './Home.css'
import Quiz1 from './Quiz1'
import Quiz2 from './Quiz2'
import Quiz3 from './Quiz3'
import Quiz4 from './Quiz4'
import Quiz5 from './Quiz5'


export default class Home extends Component{

                  constructor(){
                        super()
                      this.state ={
                                  next : 0,
                                  totalScore :0
                                  }
                        }
          nextStep = () => {
              let {next} = this.state
              this.setState({next : next + 1})
          }
             
          backStep= () =>{
            let {next} = this.state
            this.setState({next : next - 1})
        }
       markCal = (score) =>{
            let { totalScore } = this.state
            totalScore = totalScore + score
            this.setState({ totalScore})
}
            


      render(){
          let {next} = this.state
          switch(next){

              case 1 : return( 
                              <div className='App'>
                                    <Quiz1 
                                    next={this.nextStep} 
                                    backs={this.backStep}
                                    calculation={this.markCal}/>
                               </div>
                            )
                 case 2 : return( 
                              <div className='App'>
                                     <Quiz2 
                                    next={this.nextStep} 
                                    backs={this.backStep}
                                    calculation={this.markCal}
                                    />
                              </div>
                            )

                case 3 : return( 
                              <div className='App'>
                                     <Quiz3 
                                    next={this.nextStep} 
                                    backs={this.backStep}
                                    calculation={this.markCal}/>
                              </div>
                           )
                case 4 : return( 
                              <div className='App'>
                                  <Quiz4 
                                    next={this.nextStep} 
                                    backs={this.backStep}
                                    calculation={this.markCal}/>
                              </div>
                               )
                case 5 : return( 
                                <div className='App'>
                                   <Quiz5 
                                    next={this.nextStep} 
                                    backs={this.backStep}
                                    calculation={this.markCal}/>
                                </div>
                               )
                default :  return( 
                               <div className='App'>
                               <div> {this.state.totalScore || 'This is home page of the quiz'}  </div>
                               <button className = 'btn'onClick={this.nextStep}>Start Quiz </button>
                               
                            </div>
                       )

                  }
        }
}