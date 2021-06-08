import { IHttpBody, IHttpResponse } from '../../interfaces/http';

export class HttpResponse implements IHttpResponse {
    public statusCode: number;
    public body: IHttpBody;

    constructor(pStatusCode: number, pBody: IHttpBody) {
        this.statusCode = pStatusCode;
        this.body = pBody;
    }
}
