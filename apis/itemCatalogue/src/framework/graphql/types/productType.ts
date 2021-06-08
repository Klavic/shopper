import { GraphQLObjectType, GraphQLResolveInfo, GraphQLString } from 'graphql';
import { CategoryModel } from '../../sequelize/models/categoryModel';
import { ProductModel } from '../../sequelize/models/productModel';
import categoryType from './categoryType';

const productType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Product',
    description: 'Product',
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
        idCategory: {
            type: GraphQLString,
            resolve: (source: ProductModel, args: { [argName: string]: any }, context: GraphQl.IContext) => {
                return source.idCategory;
            },
        },
        category: {
            type: categoryType,
            resolve: (source: ProductModel, args: { [argName: string]: any }, context: GraphQl.IContext, info: GraphQLResolveInfo) => {

                return CategoryModel.findOne({
                    where: { id: source.idCategory },
                });
            },
        },
    }),
});

export default productType;
