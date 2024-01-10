import { Request, Response } from 'express';
import { IController } from '../../app/types/IController';

export function routeAdapter(constroller: IController) {
    return async (req: Request, res: Response) => {
        const {statusCode, body} = await constroller.handle({
            body: req.body,
            params: req.params,
            account: req.metadata?.account,
            headers: req.headers as Record<string, string>
        });

        res.status(statusCode).json(body);
    }
}
