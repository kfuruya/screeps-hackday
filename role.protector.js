names = require('./utils/names');
/** @param {Creep} creep **/
function run(creep) {
    // attacks all creeps that have an ATTACK body part
    const target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
        filter: function(object) {
            return object.getActiveBodyparts(ATTACK) !== 0;
        }
    });
};

function init(name, spawn) {
    if (!spawn) {
        spawn = 'Spawn1';
    }
    if (!name) {
        name = 'Protector' + Game.time;
    }
    Game.spawns[spawn].spawnCreep( [ATTACK, ATTACK, MOVE, MOVE], name, {memory: {role: 'protector'}});
}

module.exports = {run, init};