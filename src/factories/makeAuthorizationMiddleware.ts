import { AuthorizationMiddleware } from "../app/middlewares/AuthorizationMiddleware";
import { makeGetRolesPermissions } from "./makeGetRolesPermissions";

export function makeAuthorizationMiddleware(allowedRoles: string[]) {
    return new AuthorizationMiddleware(
        allowedRoles,
        makeGetRolesPermissions()
    );
}
