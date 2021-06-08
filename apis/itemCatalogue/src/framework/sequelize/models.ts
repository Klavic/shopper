import { Sequelize } from 'sequelize/types';

import { CategoryModel } from './models/categoryModel';
import { ProductModel } from './models/productModel';
import { VersaoModel } from './models/versaoModel';

export interface IModels {
    product: typeof ProductModel;
    category: typeof CategoryModel;
    versao: typeof VersaoModel;
}

export class Models implements IModels {
    public product: typeof ProductModel = ProductModel;
    public category: typeof CategoryModel = CategoryModel;
    public versao: typeof VersaoModel = VersaoModel;

    constructor(sequelize: Sequelize) {
        Object.keys(this).forEach((pModel: string) => {
            const model = pModel as keyof Models;
            if (this[model] !== undefined && this[model].initialization !== undefined) {
                this[model].initialization(sequelize);
            }
        });
        Object.keys(this).forEach((pModel: string) => {
            const model = pModel as keyof Models;
            if (this[model] !== undefined && this[model].association !== undefined) {
                this[model].association(this);
            }
        });
    }
}
