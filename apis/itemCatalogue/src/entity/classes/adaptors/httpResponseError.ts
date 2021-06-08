import { HttpResponse } from './httpResponse';

import { ErrorInterface } from '../../interfaces/error';

export class HttpResponseError extends HttpResponse {
    constructor(pError: ErrorInterface) {
        super(pError.httpCode ?? 500, {
            sucesso: false,
            mensagem: pError.titulo,
            dados: null,
            erro: {
                descricao: pError.descricao,
            },
        });
    }
}
