import { Router } from 'express';

import { routeAdapter } from '../adapters/routeAdapter';

import {makeSignUpController } from '../../factories/makeSignUpController';
import {makeSignInController } from '../../factories/makeSignInController';

const authRoutes = Router();

authRoutes.post('/sign-up', routeAdapter(makeSignUpController()));
authRoutes.post('/sign-in', routeAdapter(makeSignInController()));

export {
    authRoutes
};
