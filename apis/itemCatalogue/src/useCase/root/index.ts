import { RootController } from '../../application/controller/rootController';
import { RootUseCase } from './rootUseCase';

const rootUseCase = new RootUseCase();

const rootController = new RootController(rootUseCase);

export { rootController, rootUseCase };
