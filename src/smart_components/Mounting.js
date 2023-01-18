import React, { Component } from "react"

export  class Mounting extends Component {
    constructor(props) {
        super(props);
       
        this.submit = this.submit.bind(this);
    }
    submit(event) {
        // alert('Sucess');
        console.log(event)
    }
    render(){
        console.log("in render");
        return(
            <div>
                <button onClick={(e)=>this.submit(e)}>Click Here</button>
            </div>
        );
    }
}
export default Mounting