const mysql  = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mygta5' ,
});

connection.connect(function (err) { 
    if (err) {
        console.log(err)
    }else{
        console.log('подключено к базе данных')
    } 
});

mp.events.add('serverShutdown', async () =>{
    connection.end()
})

exports.connection = connection