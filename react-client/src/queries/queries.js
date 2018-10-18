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

const addBookMutation = gql`
  mutation{
    addBook(name: "", genre: "", authorId: ""){
      name
      id
    }
  }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation };
