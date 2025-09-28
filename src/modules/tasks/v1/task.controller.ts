import { Task } from "../task.types"
import { Request, Response } from "express";
import { createTaskSchema, updateTaskSchema } from "../task.schema"
import { TaskService } from "../task.service";


export class TaskControllerV1 {

    constructor(private readonly service: TaskService) {}

    getAll = async(req: Request, res: Response) => {
        const tasks : Task[] = this.service.getAll()
        res.json(tasks);
    }

    getById = async(req: Request, res: Response) => {
        const task = this.service.getById(Number(req.params.id))
        if (!task) {
            return res.status(404).json({ error: "Task not found"})
        }
        res.json(task)
    }

    create = async(req: Request, res: Response) => {
        const parsedTask = createTaskSchema.safeParse(req.body)
        if (!parsedTask.success) {
            return res.status(400).json(parsedTask.error)
        }

        const task = this.service.create(parsedTask.data) 
        res.status(201).json(task)
    }

    update = async(req: Request, res: Response) => {
        const parsedTask = updateTaskSchema.safeParse(req.body)
        if (!parsedTask.success) {
            return res.status(400).json(parsedTask.error)
        }
        const task = this.service.update(Number(req.params.id), parsedTask.data)
        if (!task) {
            return res.status(404).json({ error: "Task not found"})
        }
        res.json(task)
    }

    delete = async(req: Request, res: Response) => {
        const deleted = this.service.delete(Number(req.params.id))
        if (!deleted) {
            return res.status(404).json({ error: "Task not found"})
        }
        res.status(204).send()
    }
}
