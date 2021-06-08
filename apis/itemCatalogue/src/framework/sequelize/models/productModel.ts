import { Model, Sequelize, DataTypes } from 'sequelize';

import { Models } from '../models';

export class ProductModel extends Model {
    public id!: string;
    public name!: string;
    public quantity!: number;
    public idCategory!: string;

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
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
        }, {
            sequelize,
            freezeTableName: true,
            tableName: 'product',
            underscored: false,
            indexes: [
                { fields: ['id'] },
                { fields: ['idCategory'] },
            ],
        });
    }

    static association(models: Models) {
        ProductModel.belongsTo(models.category, {
            as: 'category',
            foreignKey: {
                field: 'idCategory',
                name: 'idCategory',
                allowNull: false,
            },
            targetKey: 'id',
        });
    }
}
