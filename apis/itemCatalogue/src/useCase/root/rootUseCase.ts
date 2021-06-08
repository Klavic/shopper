import { HttpResponseSuccess } from '../../entity/classes/adaptors/httpResponseSuccess';

export class RootUseCase {
    constructor() { }

    async execute() {
        return new HttpResponseSuccess({ dados: null, mensagem: 'Root controller' });
    }
}
