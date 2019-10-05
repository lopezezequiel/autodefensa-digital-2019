import React, { Component } from 'react';
import 'typeface-roboto';
import { MessageList } from '../MessageList/MessageListComponent';
import { AppPropsInterface } from './AppPropsInterface';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class App extends Component<AppPropsInterface> {
  render() {
    return (
      <Router>
        <Route exact path="/:key" component={MessageList}></Route>
      </Router>
    );
  }
}