let myBrowser

mp.events.add('showRegister', (player) => {
    {
        myBrowser = mp.browsers.new("package://res/register/registration.html");
        myBrowser.execute("mp.invoke('focus', true)");
        
    }
});

mp.events.add('showLogin', (player) => {
    {
        myBrowser = mp.browsers.new("package://res/register/entrance.html");
        myBrowser.execute("mp.invoke('focus', true)");
        mp.gui.chat.activate(false);
    }
});

mp.events.add('showAuthError', (errorMessage) =>{
    myBrowser.execute(`showError("${errorMessage}")`)
});


mp.events.add('onLogin', (data) => {
    {
        mp.events.callRemote('onPlayerLogin', data)
    }
});

mp.events.add('onRegister', (data) => {
    {
        mp.events.callRemote('onPlayerRegister', data)
    }
});

mp.events.add('hideRegLoginDialog', () =>{
    myBrowser.execute("mp.invoke('focus', false)");
    myBrowser.active = false;
    mp.gui.chat.activate(true);
})


mp.events.add('guiReady', () => {
    mp.game.ped.removeScenarioBlockingArea(0, true);
    mp.game.streaming.setPedPopulationBudget(3);
    mp.game.ped.setCreateRandomCops(true);
    mp.game.vehicle.setRandomBoats(true);
    mp.game.vehicle.setRandomTrains(true);
    mp.game.vehicle.setGarbageTrucks(true);
    mp.game.streaming.setVehiclePopulationBudget(3);
    mp.game.invoke('0x34AD89078831A4BC'); // SET_ALL_VEHICLE_GENERATORS_ACTIVE
    mp.game.vehicle.setAllLowPriorityVehicleGeneratorsActive(true);
    mp.game.vehicle.setNumberOfParkedVehicles(-1);
    mp.game.vehicle.displayDistantVehicles(true);
    mp.game.graphics.disableVehicleDistantlights(false);
});


// mp.keys.bind(0x74, true, function() {
//     console.log('sdajgih')
//     let GodMode
//     var localPlayer = mp.players.local;
//     // if(player.adminLvl != 0){
     
// 	GodMode = !GodMode;
// 	if (GodMode){
// 		localPlayer.setInvincible(true);
//         GodMode = true
//         console.log('true')
//       	// mp.gui.chat.push("God mod Enabled");
// 	} else {
// 		localPlayer.setInvincible(false);
//         GodMode = false
//         console.log('false')
//       	// mp.gui.chat.push("God mod disabled");
// 	}
//     // }
// });

