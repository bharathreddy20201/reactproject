import React, { Component } from "react"

export  class Crendering extends Component {
    constructor(props) {
        super(props);
        this.state={ show:true,react:true }
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
                {this.state.show && <button>Show button</button>}
                {this.state.react?<button>React js</button>:null}
            </div>
        );
    }
}
export default Crendering