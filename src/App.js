import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Preview from './components/Preview';
import Contact from './components/Contact';
import AddContact from './components/AddContact';

class App extends Component {
  state = {}

  render() {
   
    return (
      <BrowserRouter>
        <div className="App">
        <div className="contact-container">
          <Route exact path='/' component={Contact} />
          <Route exact path='/preview' component={Preview} />
          <Route exact path='/addContact' component={AddContact} />
        </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
