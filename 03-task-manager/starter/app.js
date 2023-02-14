const express = require('express');
const app = express();
const port = 3000;
const taskRouter = require('./routes/tasks.route');


// middleware
app.use(express.json());


// routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
})

app.use('/api/v1/tasks', taskRouter);

app.listen(port, console.log(`server is listening on port ${port}`));


