var roleHarvester = require('role.harvester');
roleHarvester.init();

module.exports.loop = function () {
    for(var name in Game.creeps) {
        console.log("test");
        var creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}