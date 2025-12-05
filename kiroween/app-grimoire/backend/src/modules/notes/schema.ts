import { z } from 'zod';

export const createNoteSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  content: z.string().min(1, 'Content is required'),
});

export const updateNoteSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long').optional(),
  content: z.string().min(1, 'Content is required').optional(),
});

export type CreateNoteInput = z.infer<typeof createNoteSchema>;
export type UpdateNoteInput = z.infer<typeof updateNoteSchema>;
