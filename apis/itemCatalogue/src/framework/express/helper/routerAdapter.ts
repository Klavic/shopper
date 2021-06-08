import { Request, Response } from 'express';

import { ErrorClass } from '../../../entity/classes/erro';

import { HttpResponse } from '../../../entity/classes/adaptors/httpResponse';
import { HttpResponseError } from '../../../entity/classes/adaptors/httpResponseError';
import { IController, IHttpRequest } from '../../../entity/interfaces/http';

export type IRequestHandler = (req: Request, res: Response) => Promise<any>;

export class RouterAdapt {
    static handler(pController: IController): IRequestHandler {
        return async (req: Request, res: Response) => {
            let httpResponse: HttpResponse;
            try {
                const httpRequest: IHttpRequest = {
                    body: req.body,
                    headers: req.headers,
                    params: req.params,
                };

                httpResponse = await pController.handler(httpRequest);
            } catch (error) {
                if (error instanceof ErrorClass === true && error.httpCode !== undefined) {
                    httpResponse = new HttpResponseError(error);
                } else {
                    console.error(error);
                    httpResponse = new HttpResponseError({ httpCode: 500, titulo: 'Erro interno do servidor.' });
                }

            }

            res.status(httpResponse.statusCode).json(httpResponse.body);
            return;
        };
    }
}
