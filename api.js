let db = require('./db')

let apis = {
    getData(){
        return new Promise((resolve, reject)=>{
            db.collection('text').findOne({name:"shriyash"}, (err, data)=>{
                resolve(data)
              })
        })
    }
}

module.exports = apis;