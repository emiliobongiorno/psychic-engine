import express from 'express';
import { TaskController } from "./modules/tasks/task.controller";
import { TaskService } from './modules/tasks/task.service';

const app = express()
const port = 3000

app.use(express.json())

const taskService = new TaskService();
const taskController = new TaskController(taskService);

app.get('/api/v1/tasks', taskController.getAll)
app.get('/api/v1/tasks/:id', taskController.getById)
app.post('/api/v1/tasks', taskController.create)
app.put('/api/v1/tasks/:id', taskController.update)
app.delete('/api/v1/tasks/:id', taskController.delete)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})