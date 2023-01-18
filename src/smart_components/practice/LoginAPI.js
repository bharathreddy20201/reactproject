import React, { Component } from 'react'

export class LoginAPI extends Component {
  constructor(props){
  super(props);
  this.state={
    username:"",
    password:""
  }
}
login=(e)=>{
  e.preventDefault()
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>res.json())
  .then(result=>{
    console.log(result);
    if(result.filter(user=>user.username===this.state.username).length>0){
      alert("login Succesfully")
    }
    else{
      alert("wrong user")
    }
  });
  // if(this.state.username==="admin" && this.state.password==="admin")
  // {
  //   alert("Login Successfully");
  // }
  // else{
  //  alert("wrong user");
  // }

}
onChangeusername(username){
  this.setState({username});
}
onChangepassword(password){
  this.setState({password});
}
  render() {
    return (
      <div style={{textAlign:"center"}}>

        <form onSubmit={this.login}>
          <input type="text" value={this.state.username} onChange={(e)=>this.onChangeusername(e.target.value)} placeholder='username' />
          <br/>
          <input type="password" value={this.state.password} onChange={(e)=>this.onChangepassword(e.target.value)} placeholder='password' />
          <br />
          <input type="submit" value="Login API" />
        </form>
      </div>
    )
  }
}

export default LoginAPI