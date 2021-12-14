import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import {
    CreateJobHandler,
    DeleteJobHandler,
    RetrieveJobHandler,
    RetrieveJobsHandler,
    UpdateJobHandler
} from './handlers';

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.post('/jobs', CreateJobHandler);

app.get('/jobs/:id', RetrieveJobHandler);

app.get('/jobs', RetrieveJobsHandler);

app.put('/jobs/:id', UpdateJobHandler);

app.delete('/jobs/:id', DeleteJobHandler);

createConnection().then(() => {
    app.listen(port);
});
