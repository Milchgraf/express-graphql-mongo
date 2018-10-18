import { gql } from 'apollo-boost';

const getBooksQuery = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors{
      name
      age
      id
    }
  }
`;

export { getAuthorsQuery, getBooksQuery };
