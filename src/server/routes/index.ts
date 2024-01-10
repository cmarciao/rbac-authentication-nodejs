import { Router } from 'express';

import { authRoutes } from './auth.routes';
import { leadsRoutes } from './leads.routes';

const router = Router();

router.use('/', authRoutes);
router.use('/leads', leadsRoutes);

export {
    router
};
