const DB = require('./dbconnect.js')
let my_pass

mp.events.add('onPlayerRegister', (player, data) =>{
    data = JSON.parse(data);
    DB.connection.query('SELECT id FROM accounts where name = ? LIMIT 1', [data.login], (error, results) =>{
        if(results.lengts === 0 ){
           return player.call('showAuthError', ['Аккаунт уже с таким именем зарегистрирован']) 
        }else{
            DB.connection.query('INSERT INTO accounts set username = ?, pass = ?, adminLvl = 0, socialClub = ?, name = ?, ip = ?;', [data.login, data.pass, player.socialClub, data.names, player.ip], (error, results) =>{
                player.call('hideRegLoginDialog');
                player.admin = 0;
                player.name = data.names
                player.outputChatBox('Аккаунт зарегистрирован');
            })
        } 
    }
    )
});

mp.events.add('onPlayerLogin', (player, data) =>{
    data = JSON.parse(data);
    DB.connection.query('SELECT * FROM accounts where username = ? LIMIT 1', [data.login], (error, results) =>{
        if(results.lengts === 0 ) return player.call('showAuthError', ['Неверный логин и/или пароль'])
        if(results[0].pass != data.pass){
            player.call('hideRegLoginDialog');
            player.outputChatBox('Неверный пароль');
        }else{
            player.call('hideRegLoginDialog');
            player.names = data.name;
            player.admin = data.adminLvl;
            player.outputChatBox('Вы успешно вошли')
        }
    }
    )
});

mp.events.add('showAuthError', (errorMessage) =>{
    myBrowser.execute()
})