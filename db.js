let MongoClient =  require('mongodb').MongoClient;
let uri =  "mongodb://127.0.0.1:27017/node_04_02_2023";
console.log(45)
const client = new MongoClient(uri)
async function main(){

    await client.connect();
    console.log('Connected successfully to server');

}

main()
//     client.connect(err=>{
//     if(err){
//         console.log('Something went wrong')
//     }else{
//         console.log('Db connected')
//     }
// })

module.exports = client.db('node_04_02_2023')