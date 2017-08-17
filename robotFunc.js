const robots = require('./robotData')

function getRobots () {
  return robots
}

function getRobot (robotId) {
  let pickedRobot ={}
  for (let i=0; i<robots.length; i++){
    if (robots[i].id === robotId){
      pickedRobot = robot[i]
    }
  }
  return pickedRobot
}

module.exports = {
  getRobots: getRobots,
  getRobot: getRobot
}
