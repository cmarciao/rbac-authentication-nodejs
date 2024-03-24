import { prismaClient } from '../lib/prismaClient';
import { IRequest } from '../types/IRequest';
import { IController, IResponse } from '../types/IController';

export class ListLeadsController implements IController {
    async handle(request: IRequest): Promise<IResponse> {
        const leads = await prismaClient.account.findMany();

        return {
            statusCode: 200,
            body: leads
        }
    }

}
