const express = require('express')
const mustacheExpress = require('mustache-express')
const robotFunc = require('./robotFunc')


const app = express()

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.use(express.static('public'))


app.get('/', function(request, response){
  const robotDirectory = robotFunc.getRobots()
    response.render('robotpg1',{
      Title: 'Robots Are Human',
      robotDirectory: robotDirectory.users
    })


})
// app.get('/robotDirectory', function(request, response){
//   const robotDirectory = robotFunc.getRobots()
//     console.log(robotDirectory);
//     response.render('robotLoop',{
//       robotDirectory: robotDirectory.users
//   })
// })

app.get('/robotDirectory/:id', function (request, response){
  // robotPick ={}
  const pickedRobot = robotFunc.getRobot(request.params.id)
  // const robotDirectory = robotFunc.getRobot()
  console.log("object", pickedRobot)
  if (pickedRobot){
    response.render('_robotIndv', pickedRobot)
    // console.log("number inside of if statment", pickedRobot)
  } else {
    response.send('OMG NO Robots!? :(')
  }
})

app.listen(3000, function(){
    console.log('Server Started on Port 3000...');
})
