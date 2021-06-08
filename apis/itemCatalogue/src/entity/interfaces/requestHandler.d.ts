import { Request, Response, NextFunction } from 'express';

export type IRequestHandler = (req: Request, res: Response) => Promise<any>;