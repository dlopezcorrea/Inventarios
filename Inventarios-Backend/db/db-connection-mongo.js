const mongoose = require('mongoose');

const getConnection = async () => {
    try {
        const url = 'mongodb://diego_lopez:Bannby7.7@sandbox-shard-00-00.8vu3n.mongodb.net:27017,sandbox-shard-00-01.8vu3n.mongodb.net:27017,sandbox-shard-00-02.8vu3n.mongodb.net:27017/Inventarios?ssl=true&replicaSet=atlas-gxpo64-shard-0&authSource=admin&retryWrites=true&w=majority';


        await mongoose.connect(url);

        console.log('Conexion exitosa a MongoDB');

    } catch(error) {
        console.log(error);
    }
    
}
module.exports ={
    getConnection,
}