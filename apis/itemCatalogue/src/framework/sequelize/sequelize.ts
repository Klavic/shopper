import { Options, Sequelize, Op, QueryTypes } from 'sequelize';

import { Models } from './models';

import migration from '../sequelize/tools/migration';

export class Database {
    private dbConfig: Options;
    public sequelize: Sequelize;
    public models: Models;
    public op = Op;
    public queryTypes = QueryTypes;

    constructor() {
        this.dbConfig = {
            database: process.env.DBNAME,
            username: process.env.DBUSER,
            password: process.env.DBPASSWORD,
            host: process.env.DBHOST,
            port: Number(process.env.DBPORT),
            dialect: 'postgres',
            define: {
                freezeTableName: true,
                underscored: false,
                createdAt: false,
                updatedAt: false,
            },
            logging: false,
        };

        this.sequelize = new Sequelize(this.dbConfig);
        this.models = new Models(this.sequelize);
        this.sequelize.sync().then(() => {
            migration().catch(console.error);
        });
    }
}
