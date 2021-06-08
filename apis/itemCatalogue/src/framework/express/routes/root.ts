import { Router } from 'express';
import { rootController } from '../../../useCase/root';
import { RouterAdapt } from '../helper/routerAdapter';

import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { CategoryModel } from '../../sequelize/models/categoryModel';

export default (): Router => {
    const routes: Router = Router();

    routes.get('/', RouterAdapt.handler(rootController));

    return routes;
};
