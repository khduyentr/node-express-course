const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const taskRouter = require('./routes/tasks.route');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();


// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);


// once we connect to server, then we listen
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is listening on port ${port}`));
    } catch (err) {
        console.error(err);
    }
}

start();


