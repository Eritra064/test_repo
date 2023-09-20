import React,{ Component } from 'react';
import books from '../assets/books';
import BookList from './lists/BookList';
import NewBook from './representational/NewBook';
import { Routes,Route, NavLink } from 'react-router-dom';
import SignIn from './auth/SignIn';
import PrivateRoute from './auth/PrivateRoute';

class MainComponent extends Component{
    state={
        books : books,
        
      }
    
    
      changeWithInputState = (event,index) =>{
        const book = {
          ...this.state.books[index]
        }
        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;
        this.setState({books:books});
      }
    
      deleteBookState = (index) =>{
        //const books = this.state.books.slice();//Generate a copy of the original array
        //const books = this.state.books.map(item=>item);//copy of array
        const books = [...this.state.books];//copy
        books.splice(index,1);
        this.setState({
          books:books
        })
      }
    

    
      render(){

    
        const books = <BookList books={this.state.books}
        deleteBookState = {this.deleteBookState}
        changeWithInputState = {this.changeWithInputState} />;

    
        //console.log(books);
    
        return(
          <div className="App">
            <nav className='nav-bar'>
              <ul>
                <li>
                  <NavLink to={"/"}>SignIn</NavLink>
                </li>
                <li>
                  <NavLink to={"/books"}>Books</NavLink>
                </li>
                <li>
                <NavLink to={"/new-book"}>New Book</NavLink>
                </li>
              </ul>
            </nav>
            <Routes>
              <Route path='/' element={<SignIn />}></Route>
              <Route element={<PrivateRoute />}>
                <Route path='/books' element={books}></Route>
                <Route path='/new-book' element={<NewBook />}></Route>
              </Route>

            </Routes>
          </div>
         
    
        );
      }
}

export default MainComponent;