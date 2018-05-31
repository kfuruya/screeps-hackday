var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var harvesterCount = 20;
var upgraderCount = 20;

var createCreep = {
	"harvester": false,
	"upgrader": false,
	"claimer": false,
	"protector": false
}

module.exports.loop = function () {

    // Cleaning up the memory clugs
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    var claimers = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');

    if(harvesters.length < harvesterCount) {
    	createCreep['harvester'] = true;
    }
    if(upgraders.length < upgraderCount) {
    	createCreep['upgrader'] = true;
    }
    if(claimers.length + 1 < Game.gcl.level) {
    	createCreep['claimer'] = true;
    }
    
    
    if((harvesters.length <  upgraders.length) && createCreep['harvester']){
        roleHarvester.init();
        if (harvesters.length === harvesterCount) {
        	createCreep['harvester'] = false;
        }
    }
    if (createCreep['upgrader'] === true){
        roleUpgrader.init();
        if (harvesters.length === upgraderCount) {
        	createCreep['upgrader'] = false;
        }
    }
    if (createCreep['claimer'] === true){
        roleUpgrader.init();
        if (harvesters.length === Game.gcl.level) {
        	createCreep['claimer'] = false;
        }
    }
 
    if(Game.spawns['Spawn1'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}