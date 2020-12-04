const express =require('express') ;
const app = express();
const routes = require('./routes')

const cors =require('cors') 

//middleware
app.use(cors())
app.use(express.json())

//routes
app.use('/',routes)


module.exports = app