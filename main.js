module.exports.loop = function () {
  Object.keys(Game.creeps).forEach((name) => {
    const creep = Game.creeps[name];
    if (creep.memory.role === 'harvester') {
      // do harvesting things
    } else if (creep.memory.role === 'upgrader') {
      // upgrade the room
    }
  });
};
