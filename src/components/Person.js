import React,{Component} from "react";

// function Person(){
//     return(
//       <div>
//       <h1>I am a person component</h1>
//       </div>
//     );
  
//   }



let Person = (props) =>{
    return(
      <div>
      <h3>Name: {props.name} and Age: {props.age} Years</h3>
      <h4>Extra info: {props.children}</h4>
      </div>
    );
}

// class Person extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//     return(
//       <div>
//       <h3>Name: {this.props.name} and Age: {this.props.age} Years</h3>
//       <h4>Extra info: {this.props.children}</h4>
//       </div>
//     );
//     }
// }

  export default Person;