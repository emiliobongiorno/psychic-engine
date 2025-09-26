import z from 'zod'

export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required and cannot be empty"),
  description: z.string().optional(),
  completed: z.boolean().optional().default(false)
})

export const updateTaskSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  completed: z.boolean().optional()
})