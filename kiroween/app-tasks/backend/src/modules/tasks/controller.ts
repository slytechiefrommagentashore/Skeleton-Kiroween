import { Request, Response, NextFunction } from 'express';
import { taskService } from './service';
import { createTaskSchema, updateTaskSchema } from './schema';
import { successResponse } from '../../common/response';

export class TaskController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await taskService.getAllTasks();
      res.json(successResponse(tasks));
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const task = await taskService.getTaskById(req.params.id);
      res.json(successResponse(task));
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const validated = createTaskSchema.parse(req.body);
      const task = await taskService.createTask(validated);
      res.status(201).json(successResponse(task));
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const validated = updateTaskSchema.parse(req.body);
      const task = await taskService.updateTask(req.params.id, validated);
      res.json(successResponse(task));
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await taskService.deleteTask(req.params.id);
      res.json(successResponse(result));
    } catch (error) {
      next(error);
    }
  }
}

export const taskController = new TaskController();
