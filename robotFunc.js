const robots = require('./robotData')

function getRobots () {
  return robots
}

function getRobot (robotId) {
  let pickedRobot ={}
  for (let i=0; i<robots.users.length; i++){
    if (robots.users[i].id == robotId){
      pickedRobot = robots.users[i]
    }
  }
  return pickedRobot
}

module.exports = {
  getRobots: getRobots,
  getRobot: getRobot
}
