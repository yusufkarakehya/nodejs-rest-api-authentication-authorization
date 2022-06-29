const express = require('express');
const userRouter = require('./routers/user');
require('./db/db');

const app = express();

app.use(express.json());
app.use(userRouter);

const port = process.env.PORT || 8080;;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});