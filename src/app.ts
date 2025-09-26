import express from 'express';
import { TaskController } from "./modules/tasks/task.controller";
import { TaskService } from './modules/tasks/task.service';
import { authenticateToken } from "./middleware/auth.middleware"
import { AuthController } from './modules/auth/auth.controller';

const app = express()
const port = 3000

app.use(express.json())

const authController = new AuthController()
const taskService = new TaskService();
const taskController = new TaskController(taskService);

app.post('/api/v1/auth/login', authController.login)

app.get('/api/v1/tasks', authenticateToken, taskController.getAll)
app.get('/api/v1/tasks/:id', authenticateToken, taskController.getById)
app.post('/api/v1/tasks', authenticateToken, taskController.create)
app.put('/api/v1/tasks/:id', authenticateToken, taskController.update)
app.delete('/api/v1/tasks/:id', authenticateToken, taskController.delete)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})