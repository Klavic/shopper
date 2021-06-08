import { HttpResponse } from '../../entity/classes/adaptors/httpResponse';
import { IController, IHttpRequest } from '../../entity/interfaces/http';
import { RootUseCase } from '../../useCase/root/rootUseCase';

export class RootController implements IController {
    constructor(private rootUseCase: RootUseCase) { }

    public async handler(pHttpRequest: IHttpRequest): Promise<HttpResponse> {
        try {
            return Promise.resolve(await this.rootUseCase.execute());
        } catch (err) {
            return Promise.reject(err);
        }
    }
}
