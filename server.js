const express =  require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectionDB = require('./config/db');
const errorHandler = require('./middlewire/error');


//config dotenv
dotenv.config({path: './config/config.env'});
//db connection

connectionDB();

//Route files
const bootcamps = require('./routes/bootcamp');

const app = express();

//morgan console.log hit api and response time.

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//body parse-> middleware-> body convert into json
app.use(express.json());

//use bootcamps
app.use('/api/v1/bootcamps', bootcamps);

//middlewire
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`server running at ${PORT}`));