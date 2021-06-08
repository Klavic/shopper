import { GraphQLList, GraphQLObjectType, GraphQLResolveInfo, GraphQLString } from 'graphql';
import { CategoryModel } from '../../sequelize/models/categoryModel';
import { ProductModel } from '../../sequelize/models/productModel';
import productType from './productType';

const categoryType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Category',
    description: 'Product category',
    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: (source: CategoryModel, args: { [argName: string]: any }, context: GraphQl.IContext) => {
                return source.id;
            },
        },
        name: {
            type: GraphQLString,
            resolve: (source: CategoryModel, args: { [argName: string]: any }, context: GraphQl.IContext) => {
                return source.name;
            },
        },
        products: {
            type: GraphQLList(productType),
            resolve: (source: CategoryModel, args: { [argName: string]: any }, context: GraphQl.IContext, info: GraphQLResolveInfo) => {

                return ProductModel.findAll({
                    where: { idCategory: source.id },
                });
            },
        },
    }),
});

export default categoryType;
