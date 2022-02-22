import React from"react";
import propTypes from"prop-types";


const App = ()=>{
  const file =[
    {name:"tanaka",age:10},
    {name:"hana", age:5},
    {name:"auti"},
  ]
  return(
    <div>
    {
      file.map((profile,index) =>{
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
  </div>
  )}

const User =(props) =>{
  return <div>hi!{props.name} and{props.age}years old</div>
}

User.propTypes={
  name: propTypes.string,
  age: propTypes.number,
}



export default App;
