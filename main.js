module.exports.loop = function () {

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role === 'harvester'){ 
            // do harvesting things    
        } else if (creep.memory.role === 'upgrader') {
	    // upgrade the room
        }
    }
}
