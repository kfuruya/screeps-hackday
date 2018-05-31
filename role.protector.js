/** @param {Creep} creep **/
function run(creep) {
    // attacks all creeps that have an ATTACK body part
    const target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
        filter: function(object) {
            return object.getActiveBodyparts(ATTACK) !== 0;
        }
    });
    if ((target) || target.getActiveBodyparts(RANGED_ATTACK) !== 0){
        if(creep.attack(target) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target);
        }
    };
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