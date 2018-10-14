const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose =  require('mongoose');

const schema = require('./schema/schema');

const app = express();

mongoose.connect('mongodb://jasper:Werwerwer333@ds247290.mlab.com:47290/gql-test');
mongoose.connection.once('open', () => {
  console.log('connected to mlab database..');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listen on port 4000..');
});
