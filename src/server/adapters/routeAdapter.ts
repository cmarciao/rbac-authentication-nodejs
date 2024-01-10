import { Request, Response } from 'express';
import { IController } from '../../app/types/IController';

export function routeAdapter(constroller: IController) {
    return async (req: Request, res: Response) => {
        const {statusCode, body} = await constroller.handle({
            body: req.body,
            params: req.params,
            accountId: req.metadata?.accountId
        });

        res.status(statusCode).json(body);
    }
}
