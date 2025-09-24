const tasks: Task[] = []
let uuid = 0;

function saveTask(task: Task) {
  uuid = uuid + 1
  task.id = uuid
  tasks[uuid] = task
}

function getTasks(): Task[] {
  return tasks;
}

function getTask(taskId: Number): Task {
  const task = tasks.find(t => t.id = taskId)
  if (!task) {
    throw new Error('Not found')
  }
  return task;
}

function updateTask(taskId: Number, task: Omit<Task, "id"> ) {
  let retrievedTask: Task = getTask(taskId);
  retrievedTask = {...task}

}

function deleteTask(taskId: Number) {
  tasks
}

export {saveTask, getTasks, getTask}