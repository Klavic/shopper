import { Model, Sequelize, DataTypes } from 'sequelize';

import { Models } from '../models';

export class CategoryModel extends Model {
    public id!: string;
    public name!: string;

    static initialization(sequelize: Sequelize) {
        this.init({
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
            },
            name: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        }, {
            sequelize,
            freezeTableName: true,
            tableName: 'category',
            underscored: false,
            indexes: [
                { fields: ['id'] },
            ],
        });
    }

    static association(models: Models) {
        // CategoryModel.hasMany(models.product, {
        //     as: 'products',
        //     foreignKey: {
        //         field: 'idCategory',
        //         allowNull: false,
        //     },
        // });
    }
}
