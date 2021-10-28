import { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLString 
} from 'graphql';

/*
`type Person { outra forma de typa
    id: ID!,
    name: String!,
}`
*/
export default new GraphQLObjectType({
    name: 'Person',
    description: 'Define a Person Object',
    fields() {
        return {
            id: {
                type: GraphQLID,
                description: 'Unique ID',
                resolve: () => '2'

            },
            name: {
                type: GraphQLString,
                description: 'Person name',
                resolve: () => 'Luiz'

            }
        }
    }
})