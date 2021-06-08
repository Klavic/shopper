import { Express } from 'express';
import root from './root';

export class Routes {
    static handler(pServer: Express): void {
        pServer.use(root());
    }
}
