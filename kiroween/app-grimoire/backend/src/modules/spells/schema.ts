import { z } from 'zod';

// Mystical verification schemas for spell data
export const createSpellSchema = z.object({
  name: z.string().min(1, 'Spell name is required').max(200, 'Name too long'),
  incantation: z.string().min(1, 'Incantation is required'),
  ingredients: z.string().min(1, 'Ingredients are required'),
  powerLevel: z.number().int().min(1, 'Power level must be at least 1').max(10, 'Power level cannot exceed 10'),
});

export const updateSpellSchema = z.object({
  name: z.string().min(1, 'Spell name is required').max(200, 'Name too long').optional(),
  incantation: z.string().min(1, 'Incantation is required').optional(),
  ingredients: z.string().min(1, 'Ingredients are required').optional(),
  powerLevel: z.number().int().min(1).max(10).optional(),
});

export type CreateSpellInput = z.infer<typeof createSpellSchema>;
export type UpdateSpellInput = z.infer<typeof updateSpellSchema>;
