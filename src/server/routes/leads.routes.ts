import { Router } from 'express';

import { routeAdapter } from '../adapters/routeAdapter';
import {makeListLeadsController } from '../../factories/makeListLeadsController';

import { middlewareAdapter } from '../adapters/middlewareAdapter';
import { makeAuthenticationMiddleware } from '../../factories/makeAuthenticationMiddleware';
import { makeAuthorizationMiddleware } from '../../factories/makeAuthorizationMiddleware';

const leadsRoutes = Router();

leadsRoutes.get('/',
    middlewareAdapter(makeAuthenticationMiddleware()),
    routeAdapter(makeListLeadsController())
);

leadsRoutes.post('/',
    middlewareAdapter(makeAuthenticationMiddleware()),
    middlewareAdapter(makeAuthorizationMiddleware(['ADMIN'])),
    (_, res) => {
        res.status(201).json({ created: true });
    }
)

export {
    leadsRoutes
};
