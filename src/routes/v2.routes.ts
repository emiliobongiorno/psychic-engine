import { Router } from "express"
import { AuthController } from "../modules/auth/auth.controller"
import { TaskService } from "../modules/tasks/task.service";
import { TaskControllerV2 } from "../modules/tasks/v2/task.controller";
import { authenticateToken } from "../middleware/auth.middleware";

const v2Routes = Router()

const authController = new AuthController()
const taskService = new TaskService();
const taskController = new TaskControllerV2(taskService);

v2Routes.post('/auth/login', authController.login)
v2Routes.get('/tasks', authenticateToken, taskController.getAll)
v2Routes.get('/tasks/:id', authenticateToken, taskController.getById)
v2Routes.post('/tasks', authenticateToken, taskController.create)
v2Routes.put('/tasks/:id', authenticateToken, taskController.update)
v2Routes.delete('/tasks/:id', authenticateToken, taskController.delete)

export default v2Routes