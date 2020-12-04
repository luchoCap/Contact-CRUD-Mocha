const app = require('./app') 
//Dependencias
const dotenv= require('dotenv');
dotenv.config();
const mongoose =require('mongoose') ;



mongoose.connect(process.env.MONGO_URI, 
    {useNewUrlParser: true,
     useUnifiedTopology: true,
     socketTimeoutMS: 10000,})
    .then(() => console.info('Conectado correctamente a MongoDB'))
    .catch(() => console.info('Error al conectarse a MongoDB'))


async function main(){
    app.listen(process.env.PORT_BACKEND);
    console.log('server on port', process.env.PORT_BACKEND)
}

main()