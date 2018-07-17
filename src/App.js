import React, { Component } from 'react';
import Header from './components/Header';
import Parks from './components/Parks';
import Footer from './components/Footer';
import './App.css';

export default class App extends Component {

  constructor() {
      super();

      this.state = {
          title: 'Suomalaisia kansallispuistoja',
          subtitle: 'React App - 2018'
      };
  }

  render() {
      return (
          <div>
              <Header title={this.state.title} />
              <div className="mt-5">
                  <Parks />
              </div>
              <Footer subtitle={this.state.subtitle} />
          </div>
      );
  }
}
