import { IHttpSuccessBody } from '../../interfaces/http';
import { HttpResponse } from './httpResponse';

export class HttpResponseSuccess extends HttpResponse {
    constructor(pBody: IHttpSuccessBody) {
        super(200, {
            sucesso: true,
            mensagem: pBody.mensagem,
            dados: pBody.dados,
            erro: null,
        });
    }
}
