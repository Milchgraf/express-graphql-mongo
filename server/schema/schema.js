const graphql = require('graphql');
const _ = require('lodash');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

// dummy data:

let books = [
  { name: 'Bonjour Tristesse', genre: 'Roman' , id: '1'},
  { name: '1984', genre: 'Science-Fiction' , id: '2'},
  { name: 'Brücke über die Zeit', genre: 'Roman' , id: '3'}
];

let authors = [
  { name: 'Author 1', age: '33' , id: '1'},
  { name: 'Author 2', age: '77' , id: '2'},
  { name: 'Author 3', age: '54' , id: '3'}
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        // code to get data from db / other source
        return _.find(authors, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
