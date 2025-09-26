import { CreateTaskDto, Task, UpdateTaskDto } from "./task.types";

export class TaskService {
    private tasks : Task[] = []

    getAll(): Task[] {
        return this.tasks;
    }

    getById(id: number): Task | undefined {
        return this.tasks.find(t => t.id === id)
    }

    create(data: CreateTaskDto): Task {
        const task: Task = {
            id: this.tasks.length,
            ...data
        }
        this.tasks.push(task)
        return task;
    }

    update(id: number, data: UpdateTaskDto): Task | undefined {
        const task = this.tasks.find(t => t.id === id)
        if (!task) { 
            return undefined
        }
        Object.assign(task, data)
        return task
    }

    delete(id: number): boolean {
        const index = this.tasks.findIndex(t => t.id === id)
        if (index === -1) {
            return false
        }
        this.tasks.splice(index, 1)
        return true
    }
}