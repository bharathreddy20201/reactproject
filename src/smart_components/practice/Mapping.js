import React, { Component } from "react"

export  class Mapping extends Component {
    constructor(props) {
        super(props);
        this.state={ show:true,
            react:true,
        users:[{name:"bharath"},{name:"reddy"},{name:"pulugari"}]
        
        }



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
              <div>
                {this.state.users.map((user,index)=>(
                    <p key={index}>{index} {user.name}</p>
                ))}
              </div>
            </div>
        );
    }
}
export default Mapping