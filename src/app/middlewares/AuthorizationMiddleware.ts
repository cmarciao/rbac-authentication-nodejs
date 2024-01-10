import { IRequest } from "../types/IRequest";
import { IData, IMiddleware, IResponse } from "../types/IMiddleware";

export class AuthorizationMiddleware implements IMiddleware {
    constructor(private readonly allowedRoles: string[]) {}

    async handle(req: IRequest): Promise<IResponse | IData> {
        if(!req.account) {
            return {
                statusCode: 403,
                body: {
                    error: 'Access Denied'
                }
            };
        }

        if(!this.allowedRoles.includes(req.account.role)) {
            return {
                statusCode: 403,
                body: {
                    error: 'Access Denied'
                }
            };
        }

        return {
            data: {}
        }
    }

}
