import React from"react";


const App = ()=>{
  const file =[
    {name:"tanaka",age:10},
    {name:"hana", age:5},
    {name:"nani"},
    {age:5}
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

User.defaultProps={
  age:1,
  name:"hage"
}



export default App;
