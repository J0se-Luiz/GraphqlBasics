import express from 'express';
import bodyParser from 'body-parser';
// const expressGraphQL = require('express-graphql'); // foi desestruturado assim <<, pode usa const { graphqlHTTP } = require('express-graphql');assim <<<,  ou assim >> const expressGraphQL = require('express-graphql').graphqlHTTP
import { graphqlHTTP } from 'express-graphql'; // isso igual a const expressGraphQL = require('express-graphql');
import mongoose from 'mongoose';
import { buildSchema }from 'graphql';
import routes from './routes/index'
import Schema from './graphql/index'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  "/graphql",
  graphqlHTTP({
    Schema: Schema,
    // schema: buildSchema(`type Query { msg: String }`),
    // rootValue: { msg: () => 'Hello World' },
    graphiql: true,
    pretty: true,
  })
);

mongoose.connnect('mongodb://localhost:2701/graphql', { useNewUrlParser: true })

routes(app);
app.listen(3000, () => console.log("Express has been started"));
