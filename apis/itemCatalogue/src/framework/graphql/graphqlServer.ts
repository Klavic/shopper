import { ApolloServer } from 'apollo-server-express';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import categoryQuery from './query/categoryQuery';
import productQuery from './query/productQuery';

const rootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        category: categoryQuery,
        product: productQuery,
    }),
});

const schema = new GraphQLSchema({
    query: rootQuery,
});

const graphQLServer = new ApolloServer({
    schema,
    context: ({ req, res }) => {
        // If need, can be add hera a guard for authentication;

        // The value returned here will be in all context parameter of the resolvers;
        return {};
    },
});

export default graphQLServer;
