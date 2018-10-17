import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBookQuery = gql`
  {
    Book (id: 1){
      name
      genre
      id
    }
  }
`

class Book extends Component {

}

export default Book;
