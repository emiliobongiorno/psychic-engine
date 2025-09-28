import { Router } from "express"
import { AuthController } from "../modules/auth/auth.controller"
import { TaskService } from "../modules/tasks/task.service";
import { TaskControllerV1 } from "../modules/tasks/v1/task.controller";
import { authenticateToken } from "../middleware/auth.middleware";

const v1Routes = Router()

const authController = new AuthController()
const taskService = new TaskService();
const taskController = new TaskControllerV1(taskService);

v1Routes.post('/auth/login', authController.login)
v1Routes.get('/tasks', authenticateToken, taskController.getAll)
v1Routes.get('/tasks/:id', authenticateToken, taskController.getById)
v1Routes.post('/tasks', authenticateToken, taskController.create)
v1Routes.put('/tasks/:id', authenticateToken, taskController.update)
v1Routes.delete('/tasks/:id', authenticateToken, taskController.delete)

export default v1Routes