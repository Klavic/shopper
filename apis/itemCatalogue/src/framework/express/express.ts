import express from 'express';
import http from 'http';

import graphqlServer from '../graphql/graphqlServer';

import { Middleware } from './middleware/middlewares';
import { Routes } from './routes/routes';

export class ExpressServer {
    private express: express.Express;
    private server: http.Server;

    constructor() {
        this.express = express();
        this.server = http.createServer(this.express);

        graphqlServer.applyMiddleware({
            app: this.express,
        });

        Middleware.handler(this.express);
        Routes.handler(this.express);

        this.server.listen(process.env.PORT, () => {
            console.log(`Servidor rodando na porta ${process.env.PORT}`);
        });
    }
}
