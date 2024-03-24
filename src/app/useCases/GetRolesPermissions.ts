import { PrismaClient } from "@prisma/client";
import { prismaClient } from "../lib/prismaClient";

type IInput = {
    roleId: string;
}

type IOutput = {
    permissions: string[];
}

export class GetRolesPermissions {
    async execute({ roleId }: IInput) {
        const permissions = await prismaClient.rolePermission.findMany({
            where: { roleId }
        });

        const permissionCodeList = permissions.map(
            permission => permission.permissionCode
        );

        return { permissionCodeList };
    }
}
