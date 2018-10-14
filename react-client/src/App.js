import React, { Component } from 'react';
import BookList from './components/BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>GraphQL Demo</h1>
        <BookList></BookList>
      </div>
    );
  }
}

export default App;
