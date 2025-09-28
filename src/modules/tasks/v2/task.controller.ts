import { Request, Response } from "express";
import { TaskService } from "../task.service";


export class TaskControllerV2 {

    constructor(private readonly service: TaskService) {}

    getAll = async(req: Request, res: Response) => {
        res.json({error: "IMPLEMENTATION FOR V2 NOT READY"});
    }

    getById = async(req: Request, res: Response) => {
        res.json({error: "IMPLEMENTATION FOR V2 NOT READY"});
    }

    create = async(req: Request, res: Response) => {
        res.json({error: "IMPLEMENTATION FOR V2 NOT READY"});
    }

    update = async(req: Request, res: Response) => {
        res.json({error: "IMPLEMENTATION FOR V2 NOT READY"});
    }

    delete = async(req: Request, res: Response) => {
        res.json({error: "IMPLEMENTATION FOR V2 NOT READY"});
    }
}
