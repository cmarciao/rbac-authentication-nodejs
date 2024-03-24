import { GetRolesPermissions } from "../app/useCases/GetRolesPermissions";

export function makeGetRolesPermissions() {
    return new GetRolesPermissions();
}
