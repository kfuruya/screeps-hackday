function run(creep) {
    if(creep.carry.energy == 0) {
        var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }
    }
    else {
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
    }
}

function init(name, spawn) {
    if (!spawn) {
        spawn = 'Spawn1';
    }
    if (!name) {
        name = 'Upgrader' + Game.time;
    }
    
    Game.spawns[spawn].spawnCreep( [WORK, CARRY, MOVE], name, {memory: {role: 'upgrader'}} )
}

module.exports = {run, init};