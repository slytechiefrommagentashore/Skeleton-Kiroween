import { Router } from 'express';
import { noteController } from './controller';

const router = Router();

router.get('/', noteController.getAll.bind(noteController));
router.get('/:id', noteController.getById.bind(noteController));
router.post('/', noteController.create.bind(noteController));
router.put('/:id', noteController.update.bind(noteController));
router.delete('/:id', noteController.delete.bind(noteController));

export default router;
