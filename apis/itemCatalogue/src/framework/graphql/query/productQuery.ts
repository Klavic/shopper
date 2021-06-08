import { GraphQLList, GraphQLResolveInfo } from 'graphql';

import { ProductModel } from '../../sequelize/models/productModel';

import productType from '../types/productType';

const productQuery = {
    type: new GraphQLList(productType),
    args: {},
    resolve: (category: any, args: GraphQl.IArgs, context: GraphQl.IContext, info: GraphQLResolveInfo) => {
        return ProductModel.findAll({ where: args });
    },
};

export default productQuery;
