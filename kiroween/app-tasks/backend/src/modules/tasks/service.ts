import { PrismaClient } from '@prisma/client';
import { CreateTaskInput, UpdateTaskInput } from './schema';
import { AppError } from '../../common/error';

const prisma = new PrismaClient();

export class TaskService {
  async getAllTasks() {
    try {
      return await prisma.task.findMany({
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      console.error('Error in getAllTasks:', error);
      throw error;
    }
  }

  async getTaskById(id: string) {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new AppError(404, 'Task not found');
    }

    return task;
  }

  async createTask(data: CreateTaskInput) {
    return prisma.task.create({
      data,
    });
  }

  async updateTask(id: string, data: UpdateTaskInput) {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new AppError(404, 'Task not found');
    }

    return prisma.task.update({
      where: { id },
      data,
    });
  }

  async deleteTask(id: string) {
    const task = await prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      throw new AppError(404, 'Task not found');
    }

    await prisma.task.delete({
      where: { id },
    });

    return { id };
  }
}

export const taskService = new TaskService();
