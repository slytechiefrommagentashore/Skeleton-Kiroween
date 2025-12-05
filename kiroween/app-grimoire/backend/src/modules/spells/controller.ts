import { Request, Response, NextFunction } from 'express';
import { spellService } from './service';
import { createSpellSchema, updateSpellSchema } from './schema';
import { successResponse } from '../../common/response';

export class SpellController {
  // Summon all spells from the grimoire
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const spells = await spellService.getAllSpells();
      res.json(successResponse(spells));
    } catch (error) {
      next(error);
    }
  }

  // Retrieve a specific spell by ID
  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const spell = await spellService.getSpellById(req.params.id);
      res.json(successResponse(spell));
    } catch (error) {
      next(error);
    }
  }

  // Inscribe a new spell into the grimoire
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      // Perform mystical verification on spell data
      const validated = createSpellSchema.parse(req.body);
      const spell = await spellService.createSpell(validated);
      res.status(201).json(successResponse(spell));
    } catch (error) {
      next(error);
    }
  }

  // Transform an existing spell
  async update(req: Request, res: Response, next: NextFunction) {
    try {
      // Perform mystical verification on spell data
      const validated = updateSpellSchema.parse(req.body);
      const spell = await spellService.updateSpell(req.params.id, validated);
      res.json(successResponse(spell));
    } catch (error) {
      next(error);
    }
  }

  // Banish a spell from the grimoire
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await spellService.deleteSpell(req.params.id);
      res.json(successResponse(result));
    } catch (error) {
      next(error);
    }
  }
}

// Awaken the spell controller spirits
export const spellController = new SpellController();
