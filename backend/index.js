const express = require('express');
const app = express();
const cors = require('cors')

const router = require('./src/routes');

require('./startup/config')(app,express);
require('./startup/db')();
require('./startup/logging')();

app.use(cors())


app.use('/v1/api', router);

const port = process.env.PORT || 8000;
app.listen(port, ()=> console.log(`listening on port ${port}`));