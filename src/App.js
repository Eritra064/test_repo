import './App.css';
import React,{ Component } from 'react';
import Person from './components/Person';
import Book from './components/Book';

//Functional Component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       
        // <Person name="Rahim" age="24" >I am some info of person</Person>
        // <Person name="Kahim" age="23" />
        // <Person name="Tahim" age="21" />
        // <Person name="Pahim" age="28" />
//     </div>
  
//   );
// }



//Class Component
// class App extends Component{
//   render(){
//   return (
//     <div className="App">
//       <h1>Book List</h1>
//       <Book bookName="The something" writer="Something"/>
//       <Book bookName="The everything" writer="Everything"/>
//       <Book bookName="The nothing" writer="Nothing"/>
//     </div>
  
//   );
//   }
// }



//Class Component state
class App extends Component{
  state={
    books: [
      { bookName:"The something" , writer:"Something" },
      { bookName:"The everything", writer:"Everything" },
      { bookName:"The nothing", writer:"Nothing" }
    ],
    other: "I am other"
  }

  changeBookState = newBookName =>{
    //Wrong: this.state.books[0].bookName = "1345";
    this.setState({
      books: [
        { bookName:newBookName , writer:"Something" },
        { bookName:"The everything", writer:"Everything" },
        { bookName:newBookName, writer:"Nothing" }
      ]
    });
  }

  changeWithInputState = event =>{
    this.setState({
      books: [
        { bookName:event.target.value , writer:"Something" },
        { bookName:"The everything", writer:"Everything" },
        { bookName:"The nothing", writer:"Nothing" }
      ]
    });
  }

  render(){
    const style={
      border : "1px solid red",
      borderRadius : "5px",
      backgroundColor : "black",
      color : "white"
    };
    return(
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={() =>this.changeBookState("4567")}>Change state</button>
        <input type='text' onChange={this.changeWithInputState}></input>
        <Book bookName={this.state.books[0].bookName} 
        writer={this.state.books[0].writer} 
        inputName={this.changeWithInputState}/>
        <Book bookName={this.state.books[1].bookName} 
        writer={this.state.books[1].writer} />
        <Book bookName={this.state.books[2].bookName} 
        writer={this.state.books[2].writer}
        change={this.changeBookState.bind(this,"789")} />
      </div>
      

    );
  }
}


export default App;
