import express from 'express';
import Connection from './config/database';
import cors from 'cors'
import router from './routes'
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// Database connection
Connection.sync({ alter: true }).then(() => {
    console.log("Db connected!");
}).catch((err: string) => {
    console.log("Err", err);
});

app.get('/', (req, res) =>{
  res.json({success: true, message: 'visit /api-docs route for more'})
})

app.listen(port, () => {
  return console.log(`server started @ ${port}`);
});