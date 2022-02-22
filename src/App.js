import React, { Component } from "react";

class App extends Component{
  render(){
    return(
      <React.Fragment>
        <label htmlfor="bar">unnti</label>
        <input type="text" onChange={()=>{console.log("hi jon")}} />
      </React.Fragment>

    )
  }
}

export default App;
