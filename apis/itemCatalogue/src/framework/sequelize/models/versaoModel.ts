import { Model, Sequelize, DataTypes } from 'sequelize';

import { Models } from '../models';

export class VersaoModel extends Model {
    public idVersao!: number;
    public versao!: number;

    static initialization(sequelize: Sequelize) {
        this.init({
            idVersao: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            versao: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            freezeTableName: true,
            tableName: 'versao',
            underscored: false,
            indexes: [
                { fields: ['idVersao'] },
            ],
        });
    }

    static association(models: Models) { }
}
