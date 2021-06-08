export interface IHttpRequest {
    body?: any;
    headers?: any;
    params?: any;
}

export interface IHttpResponse {
    statusCode: number
    body: IHttpBody
}

export interface IHttpBody {
    sucesso: boolean;
    mensagem: string;
    dados: any | null;

    erro: IHttpErrorBody | null;
}

// export type IController = (pHttpRequest: IHttpRequest) => any
export interface IController {
    handler(pHttpRequest: IHttpRequest): any
};

export interface IHttpSuccessBody {
    mensagem: string;
    dados: any;
}

export interface IHttpErrorBody {
    descricao?: string;
    codigoErro?: number;
}