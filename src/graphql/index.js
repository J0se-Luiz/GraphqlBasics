import { GraphQLSchema, GraphQLObjectType } from 'grophql';
import queries from './queries';

export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fileds: queries
    }),
    // mutation: new GraphQLObjectType({
    //     name: 'Mutation',
    //     fileds: mutations
    // })
});