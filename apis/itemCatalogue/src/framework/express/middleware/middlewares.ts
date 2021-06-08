import { Express } from 'express';

import { bodyParserJson, bodyParserUrlencoded } from './bodyParser';
import cors from './cors';
import morgan from './morgan';
import helmet from './helmet';
import header from './header';

export class Middleware {
    static handler(server: Express): void {
        server.use(header());
        server.use(bodyParserJson());
        server.use(bodyParserUrlencoded());
        server.use(helmet());
        server.use(cors());
        server.use(morgan());
    }
}
