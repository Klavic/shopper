import { ErrorInterface, ErrorExtraInterface } from '../interfaces/error';

export class ErrorClass extends Error implements ErrorInterface {
    public titulo: string;
    public descricao: string;
    public error?: Error;
    public httpCode?: number;
    public extra?: ErrorExtraInterface;

    constructor(pTitulo: string, pDescricao: string, pHttpCode?: number, extra?: ErrorExtraInterface) {
        super();

        this.descricao = pDescricao;
        this.titulo = pTitulo;
        this.httpCode = pHttpCode;
    }
}
