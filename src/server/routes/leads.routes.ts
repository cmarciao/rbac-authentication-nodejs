import { Router } from 'express';

import { routeAdapter } from '../adapters/routeAdapter';
import {makeListLeadsController } from '../../factories/makeListLeadsController';

import { middlewareAdapter } from '../adapters/middlewareAdapter';
import { makeAuthenticationMiddleware } from '../../factories/makeAuthenticationMiddleware';

const leadsRoutes = Router();

leadsRoutes.get('/',
    middlewareAdapter(makeAuthenticationMiddleware()),
    routeAdapter(makeListLeadsController())
);

export {
    leadsRoutes
};
