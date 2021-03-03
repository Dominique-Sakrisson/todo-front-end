import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './Home/Home.js';
import TodosListPage from './TodosListPage/TodosListPage';
import LoginPage from './AuthPages/LoginPage.js';
import SignUpPage from './AuthPages/SignUpPage.js';
import { getUserFromLocalStorage, putUserIntoLocalStorage,} from './Local-storage-utils.js';



export default class App extends Component {
  state = {
    user: getUserFromLocalStorage(),

  }

  handleUserChange= (user) =>{
    this.setState({ user });

    putUserIntoLocalStorage(user);
  }
  render(){
    return (
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <Route
              path='/'
              exact
              render={(routerProps) => <Home {...routerProps} />}
  
            />
            <Route
              path='/todos'
              exact
              render={(routerProps) => <TodosListPage user={this.state.user}{...routerProps} />}
  
            />
            <Route
              path='/login'
              exact
              render={(routerProps) => <LoginPage 
                handleUserChange={this.handleUserChange}
                 {...routerProps} />}
  
            />
            <Route
              path='/signup'
              exact
              render={(routerProps) => <SignUpPage 
                handleUserChange={this.handleUserChange}
                {...routerProps} />}
  
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
