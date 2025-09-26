import { z } from 'zod'
import { createTaskSchema, updateTaskSchema } from './task.schema'

export interface Task {
  id: number;
  title: string;
  description?: string | undefined;
  completed: boolean;
}

export type CreateTaskDto = z.infer<typeof createTaskSchema>;
export type UpdateTaskDto = z.infer<typeof updateTaskSchema>;
