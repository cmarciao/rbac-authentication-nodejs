import { hash } from 'bcryptjs';
import { Role } from '@prisma/client';

import { prismaClient } from '../lib/prismaClient';
import { AccountAlreadyExists } from '../errors/AccountAlreadyExists';

type IInput =  {
    name: string;
    email: string;
    password: string;
}

type IOutput = void;

export class SignUpUseCase {
    async execute({ name, email, password }: IInput): Promise<IOutput> {
        const accountAlreadyExists = await prismaClient.account.findUnique({
            where: {
                email
            }
        });

        if(accountAlreadyExists) {
            throw new AccountAlreadyExists();
        }

        const hashedPassword = await hash(password, 12);

        await prismaClient.account.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role: 'USER'
            }
        });
    }
}
