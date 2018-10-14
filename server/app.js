const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose =  require('mongoose');

const schema = require('./schema/schema');

const app = express();

mongoose.connect('mongodb://jp-dev:Werwerwer333@ds163162.mlab.com:63162/emaily-dev-jp');
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
