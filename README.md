# Express, GraphQL, MongoDB, React - GETTING STARTED

## Required Dependencies for GraphQL-Server:

1. express
2. graphql
3. express-graphql
4. mongoose
5. cors (optional)

`npm i express graphql express-graphql mongoose cors`

## Create app.js file

1. import dependencies

```
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose =  require('mongoose');
const cors = require('cors');
```

2. import GraphQL-Schema

`const schema = require('./schema/schema');`

3. use express

`const app = express();`

4. connect to mongodb database

```
mongoose.connect('mongodb://localhost:27017/gql-demo');
mongoose.connection.once('open', () => {
  console.log('connected to mlab database..');
});
```
