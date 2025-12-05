import { Router } from 'express';
import { spellController } from './controller';

// Path weaver for spell routes
const router = Router();

router.get('/', spellController.getAll.bind(spellController));
router.get('/:id', spellController.getById.bind(spellController));
router.post('/', spellController.create.bind(spellController));
router.put('/:id', spellController.update.bind(spellController));
router.delete('/:id', spellController.delete.bind(spellController));

export default router;
