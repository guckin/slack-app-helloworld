import * as express from 'express';
const app = express();
const port = 3000;

app.post('/', async (req, res) => {
    console.log(req.body);
    console.log(req.query);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
