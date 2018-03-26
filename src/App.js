import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import TeacherResults from './containers/TeacherResults'

//Pages
import LoginPage from './containers/LoginPage'

//Styling
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          <TeacherResults />
        </div>
      </Router>
    )
  }
}
export default App
