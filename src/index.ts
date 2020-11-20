import * as express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send();
});

app.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.status(200).send();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
