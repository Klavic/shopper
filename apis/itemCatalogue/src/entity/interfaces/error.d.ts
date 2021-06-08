export interface ErrorInterface {
    titulo: string;
    descricao?: string;
    error?: Error;
    httpCode?: number;
    extra?: ErrorClassExtraInterface;
}

export interface ErrorExtraInterface {
    dados: any;
}