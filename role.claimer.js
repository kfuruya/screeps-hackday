
/** @param {Creep} creep **/
function run(creep) {
    if (creep.memory.destination !== creep.room.name) {
        const exitDirection = creep.room.findExitTo(creep.memory.destination);
        const exit = creep.pos.findClosestByRange(exitDirection);
        creep.moveTo(exit);
    } else {
        if (creep.room.controller) {
            const tryToClaim = creep.claimController(creep.room.controller);
            if(tryToClaim == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            } else if (tryToClaim == ERR_INVALID_TARGET) {
                const exits = Game.map.describeExits(creep.room.name);
                const exitName = Object.values(exits)[0];
                creep.memory.destination = exitName;
            }
        } else {
            const exits = Game.map.describeExits(creep.room.name);
            const exitName = Object.values(exits)[0];
            creep.memory.destination = exitName;
        }
    }
};

function init(name, spawn) {
    if (!spawn) {
        spawn = 'Spawn1';
    }
    if (!name) {
        name = 'Claimer' + Game.time;
    }
    const exits = Game.map.describeExits(creep.room.name);
    const exitName = Object.values(exits)[0];
    Game.spawns[spawn].spawnCreep( [CLAIM, MOVE, MOVE], name, {memory: {role: 'claimer', destination: exitName}} )
}

module.exports = {run, init};


