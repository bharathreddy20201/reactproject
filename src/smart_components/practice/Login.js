import React, { Component } from 'react'

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:""
        }
    }

    login=(e)=>{
        e.preventDefault();
        if(this.state.username==="admin" && this.state.password==="admin"){
            alert("Login Succesfull");
        }
        else{
            alert("wrong user");
        }

    }
    onChangeUsername(username){
        this.setState({username});
    }
    onChangePassword(password){
        this.setState({password});
    }
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <form onSubmit={this.login}>
            
      <input type="text" value={this.state.username} onChange={(e)=>this.onChangeUsername(e.target.value)} placeholder="username" />
      <br/>
      <input type="password" placeholder="password" value={this.state.password} onChange={(e)=>this.onChangePassword(e.target.value)} /> 
      <br />
      <input type="submit" value="Login" />
        </form>

      </div>
    )
  }
}

export default Login