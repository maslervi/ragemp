let sp = require('./spawn_points.json').SpawnPoints
const DB = require('./dbconnect.js')
let my_pass

mp.events.add('playerJoin', (player) =>{
    player.outputChatBox('Добро пожаловать');
    // DB.connection.query('SELECT * FROM accounts where name = ?', [player.name], (error, results) => {
    //     if (results){
    //         player.outputChatBox('Используйте /login [пароль]');
    //         // player.my_pass = results[0].pass
    //     }else{
    //         player.outputChatBox('Используйте /register [пароль] [повтор пароля]');
    //     }

    // })

    player.call('showLogin')

});

// mp.events.add('onPlayerRegister', (player, data) =>{
//     data = JSON.parse(data);
//     DB.connection.query('SELECT id FROM accounts where name = ? LIMIT 1', [data.login], (error, results) =>{
//         if(results.lengts === 0 ){
//            return player.call('showAuthError', ['Аккаунт уже с таким именем зарегистрирован']) 
//         }else{
//             DB.connection.query('INSERT INTO accounts set name = ?, pass = ?, email = ?;', [data.login, data.pass, data.mail], (error, results) =>{
//                 player.call('hideRegLoginDialog');
//                 player.outputChatBox('Аккаунт зарегистрирован');
//             })
//         } 
//     }
//     )
// });

// mp.events.add('onPlayerLogin', (player, data) =>{
//     data = JSON.parse(data);
//     DB.connection.query('SELECT * FROM accounts where name = ? LIMIT 1', [data.login], (error, results) =>{
//         if(results.lengts === 0 ) return player.call('showAuthError', ['Неверный логин и/или пароль'])
//         if(results[0].pass != data.pass){
//             player.call('hideRegLoginDialog');
//             player.outputChatBox('Неверный пароль');
//         }else{
//             player.call('hideRegLoginDialog');
//             player.outputChatBox('Вы успешно вошли')
//         }
//     }
//     )
// });

// mp.events.add('showAuthError', (errorMessage) =>{
//     myBrowser.execute()
// })

mp.events.add('playerDeath', (player) =>{
    player.spawn(sp[Math.floor(Math.random() * sp.length)])
    player.health = 100
});

