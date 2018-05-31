names = require('./utils/names');
/** @param {Creep} creep **/
function run(creep) {
    if(creep.carry.energy < creep.carryCapacity) {
        var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }
    }
    else if(Game.spawns['Spawn1'].energy < Game.spawns['Spawn1'].energyCapacity) {
        if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.spawns['Spawn1']);
        }
    }
};

function init(name, spawn) {
    if (!spawn) {
        spawn = 'Spawn1';
    }
    if (!name) {
        name = names[Math.floor(Math.random() * names.length)] + names[Math.floor(Math.random() * names.length)];
    }
    Game.spawns[spawn].spawnCreep( [WORK, CARRY, MOVE], name )
}

module.exports = {run, init};