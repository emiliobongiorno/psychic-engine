import express from 'express';
import v1Routes from "./routes/v1.routes"
import v2Routes from "./routes/v2.routes"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from './swagger.json';

const app = express()
const port = 3000

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', v1Routes)
app.use('/api/v2', v2Routes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})