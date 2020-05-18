import React, { PureComponent } from "react";
import  "./Form.css";
import axios from "axios";


export default class Form extends PureComponent {
      constructor(){
          super()
          this.state = {
              name : "",
              address : "",
              gender : "",
              _id :undefined
          }
      }
      onChangedNmae = (e) => {
            let name = e.target.value
            this.setState({name})
      }
      onChangedAddress = (e) => {
            let address = e.target.value
            this.setState({address})
    }
    onChangedGender = (e) => {
            let gender = e.target.value
            this.setState({gender})
    }
    doSomething = (e) => {
        let {name,address,gender,_id} = this.state
        e.preventDefault();
        if(name && address && gender && !_id){
            console.log("no update >>>>>>_id",_id)
        axios.post("http://localhost:3000/users",{
            name : name,
            address : address,
            gender : gender
        }).then(response => {
            console.log("response ",response.data)
            this.props.responseData(response.data)

        }).catch(error => {
            console.log("error ",error)
        })
    }else if(name && address && gender && _id){
        console.log("dosomthing >>>>>>_id",_id)   
         axios.put(`http://localhost:3000/users/${_id}`,{
            name : name,
            address : address,
            gender : gender
        })
         .then(response =>{
            console.log("response ",response.data)
            this.props.responseData(response.data)

        }).catch(error => {
            console.log("error ",error)
        })
    }
     }
    
componentDidUpdate(prevProps,prevState){
    let {_id,name,address,gender} = this.props.editRow
    console.log("did update >>>>>",this.props.editRow)
    console.log("did update >>>>>",prevProps)

    let isPropsSame = (name === prevProps.editRow.name && address === prevProps.editRow.address && gender === prevProps.editRow.gender)
    if(isPropsSame)
    {
        console.log("No need to change");
    }else{
        this.setState({name,address,gender,_id})
    }
}
render(){
      console.log("Form state >>>>",this.state)
    return(
        <div className='f-container'>
          <form className="f-data" onSubmit={this.doSomething}>
          <label className="lb-data"  > User Name </label>
          <input type="text" className="txt-data" onChange = {this.onChangedNmae} value = {this.state.name} />
          <label className="lb-data" > User Address </label>
          <input type="text" className="txt-data"  onChange = {this.onChangedAddress} value = {this.state.address} />
          <label className="lb-data" > User Gender </label>
          <select className="txt-data" onChange = {this.onChangedGender}  value = {this.state.gender} >
          <option>------</option>
              <option>Male</option>
              <option>Female</option>
          </select>
          <button className="btn-data" onSubmit = {this.onSubmittedForm}  > Submit </button>
          </form>
          </div>
    )

}


}

