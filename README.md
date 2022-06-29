Nodejs Rest Api + Authentication + Authorization
===================================================

### Author: Yusuf Karakehya
* [Website](https://karakehya.com/)
* [LinkedIn](https://www.linkedin.com/in/yusuf-karakehya/)

You can use this project to quickly get started with Nodejs Rest Api + Authentication + Authorization + MongoDB

### Update the DB configuration
First, create a MongoDB database. Then open 'src/db/db.js' and update the `_YOUR_MONGODB_URL_` with your mongodb url.

```json
const mongoose = require('mongoose');
mongoose.connect('_YOUR_MONGODB_URL_', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
```

### Build the project and run it locally (the default url is 'http://localhost:8080')

```npm install && npm start```