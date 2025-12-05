import { Request, Response, NextFunction } from 'express';
import { noteService } from './service';
import { createNoteSchema, updateNoteSchema } from './schema';
import { successResponse } from '../../common/response';

export class NoteController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const notes = await noteService.getAllNotes();
      res.json(successResponse(notes));
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const note = await noteService.getNoteById(req.params.id);
      res.json(successResponse(note));
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const validated = createNoteSchema.parse(req.body);
      const note = await noteService.createNote(validated);
      res.status(201).json(successResponse(note));
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const validated = updateNoteSchema.parse(req.body);
      const note = await noteService.updateNote(req.params.id, validated);
      res.json(successResponse(note));
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await noteService.deleteNote(req.params.id);
      res.json(successResponse(result));
    } catch (error) {
      next(error);
    }
  }
}

export const noteController = new NoteController();
