import { PrismaClient } from '@prisma/client';
import { CreateNoteInput, UpdateNoteInput } from './schema';
import { AppError } from '../../common/error';

const prisma = new PrismaClient();

export class NoteService {
  async getAllNotes() {
    return prisma.note.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async getNoteById(id: string) {
    const note = await prisma.note.findUnique({
      where: { id },
    });

    if (!note) {
      throw new AppError(404, 'Note not found');
    }

    return note;
  }

  async createNote(data: CreateNoteInput) {
    return prisma.note.create({
      data,
    });
  }

  async updateNote(id: string, data: UpdateNoteInput) {
    const note = await prisma.note.findUnique({
      where: { id },
    });

    if (!note) {
      throw new AppError(404, 'Note not found');
    }

    return prisma.note.update({
      where: { id },
      data,
    });
  }

  async deleteNote(id: string) {
    const note = await prisma.note.findUnique({
      where: { id },
    });

    if (!note) {
      throw new AppError(404, 'Note not found');
    }

    await prisma.note.delete({
      where: { id },
    });

    return { id };
  }
}

export const noteService = new NoteService();
