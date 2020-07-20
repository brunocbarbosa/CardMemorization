import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const port = 3333;

app.listen(port, () => {
    console.log(`Server on at port ${port}.`);
})