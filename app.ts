const express = require('express')
const app = express()
const port = 3000

import {saveTask, getTasks, getTask} from ("./tasks-repository")

app.post('/api/v1/tasks', (req, res) => {
  const task : Task = req.body
  try {
    saveTask(task)
  } catch (error) {
    console.log(error)
  }
  res.send('Got a POST request')
})

app.get('/api/v1/tasks', (req, res) => {
  try {
    const tasks : Task[] = getTasks()
    res.send(tasks)
  } catch (error) {
    console.log(error)
  }
  res.send('Got a POST request')
})

app.get('/api/v1/tasks/:id', (req, res) => {
  const taskId = req.params.id
  try {
     const task: Task = getTask(taskId)
     res.send(task)
  } catch (error) {
    console.log(error)
  }
  
})

app.put('/api/v1/tasks/:id', (req, res) => {
  try {
    updateTask(req.body)
  } catch {
    
  }
  res.send('Got a POST request')
})

app.delete('/api/v1/tasks/:id', (req, res) => {
  res.send('Got a POST request')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})