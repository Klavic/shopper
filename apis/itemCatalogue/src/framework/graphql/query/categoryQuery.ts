import { GraphQLList, GraphQLResolveInfo } from 'graphql';

import { CategoryModel } from '../../sequelize/models/categoryModel';

import categoryType from '../types/categoryType';

const categoryQuery = {
    type: new GraphQLList(categoryType),
    args: {},
    resolve: (category: any, args: GraphQl.IArgs, context: GraphQl.IContext, info: GraphQLResolveInfo) => {
        return CategoryModel.findAll({ where: args });
    },
};

export default categoryQuery;
