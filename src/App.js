import React,{Component} from "react";

const App = ()=>(<Counter></Counter>)

 class Counter extends Component {
   constructor(props){
     super(props)
     this.state={count:0}
   }
   Plusbutton= ()=>{
     this.setState({ count: this.state.count +1})
   }
   mainasbutton= ()=>{
     this.setState({ count: this.state.count -1})
   }
   render(){
     return (
       <React.Fragment>
         <div>count: {this.state.count}</div>
          <button onClick={this.Plusbutton}>+1</button>
          <button onClick={this.mainasbutton}>-1</button>
          
       </React.Fragment>
         )
     }
}


export default App;
