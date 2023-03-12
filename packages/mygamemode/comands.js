const DB = require('./dbconnect.js')

mp.events.addCommand('hp', (player, hpnum) =>{
    if(player.admin != 0){

        player.health = Number(hpnum)
    }
});

// mp.events.addCommand('register', (player, Fulltext, pass_one, pass_to) =>{
//     if(pass_one != pass_to){
//         player.outputChatBox('пароли различаются');
//         return;
//     }

//     DB.connection.query ('INSERT INTO accounts set name = ?, pass = ?;',[
//         player.name,
//         pass_one
//     ]);
//     player.outputChatBox('Аккаунт зарегистрирован');
// });

// mp.events.addCommand('login', (player, Fulltext, pass) =>{
  
//     DB.connection.query ('SELECT * FROM accounts where name = ?;',[
//         player.name,
//     ], (error, results) => {
//         if( results[0].pass != pass){
//             player.outputChatBox('пароль неверный');
//             return
//         }else{
//             player.outputChatBox('Вы успешно вошли')
//         }
//     });
//     ;
// })

mp.events.addCommand('wep', (player,Fulltext ,weapon, cont) =>  {
    if(player.admin != 0){
       player.giveWeapon(mp.joaat(weapon), Number(cont)); 
    }
    
});

mp.events.addCommand("veh", (player, Fulltext) => {
    if(player.admin != 0){
        var pos = player.position; // записываем в переменную координаты игрока
        pos.x += 5.0; // к координатам X прибавляем 5, дабы транспорт в нас не был
        player.veh = mp.vehicles.new(Fulltext, pos); // создание самого транспорта
        player.veh.dimension = player.dimension; // даем транспорту такое же "измерение" как у нас   
    }
    
  });

  mp.events.addCommand("adminset", (player, args) => {
    if(player.admin != 0){
        var pos = player.position; // записываем в переменную координаты игрока
        pos.x += 5.0; // к координатам X прибавляем 5, дабы транспорт в нас не был
        player.veh = mp.vehicles.new(args, pos); // создание самого транспорта
        player.veh.dimension = player.dimension; // даем транспорту такое же "измерение" как у нас   
    }
    
  });
