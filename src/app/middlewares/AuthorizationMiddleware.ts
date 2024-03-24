import { IRequest } from "../types/IRequest";
import { IData, IMiddleware, IResponse } from "../types/IMiddleware";
import { GetRolesPermissions } from "../useCases/GetRolesPermissions";

export class AuthorizationMiddleware implements IMiddleware {
    constructor(
        private readonly requiredRoles: string[],
        private readonly getRolesPermissions: GetRolesPermissions
    ) {}

    async handle({ account }: IRequest): Promise<IResponse | IData> {
        if(!account) {
            return {
                statusCode: 403,
                body: {
                    error: 'Access Denied'
                }
            };
        }

        const { permissionCodeList } = await this.getRolesPermissions.execute({
            roleId: account.role
        });

        const isAllowed = this.requiredRoles.some((role) =>
            permissionCodeList.includes(role)
        );

        if(!isAllowed) {
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
