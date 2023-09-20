import './App.css';
import React from 'react';
import Person from './components/Person';

import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

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



const App = () =>{
  return (  
  <BrowserRouter>
    <MainComponent />
    </BrowserRouter>);

}
export default App;
