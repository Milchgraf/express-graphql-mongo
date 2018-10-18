import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from '../queries/queries';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: ''
    };
  }

  displayAuthors() {
    const data = this.props.data;
    if(data.loading) {
      return (
        <option disabled>Loading Authors..</option>
      );
    } else {
      return data.authors.map(author => {
        return (
          <option key={ author.id } value={ author.id }>{ author.name } ({ author.age })</option>
        );
      });
    }
  }

  submitForm(event) {
    // stop refreshing page
    event.preventDefault();
    
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={ this.submitForm.bind(this) }>

        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={ (event) => this.setState({ name: event.target.value }) } />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={ (event) => this.setState({ genre: event.target.value }) } />
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={ (event) => this.setState({ authorId: event.target.value }) }>
            <option>Select Author..</option>
            { this.displayAuthors() }
          </select>
        </div>

        <button>+</button>

      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
