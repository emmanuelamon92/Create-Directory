const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const mustacheExpress = require('mustache-express')
const expressValidator = require('express-validator')
const robotFunc = require('./robotFunc')


const app = express()

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', 'views')

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//we need somewhere to put static stuff like css or jquery etc.
app.use(express.static(path.join(__dirname, 'public')))

//Express Validator Middleware


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
  // console.log("object", pickedRobot)
  if (pickedRobot){
    response.render('_robotIndv', pickedRobot)
    // console.log("number inside of if statment", pickedRobot)
  } else {
    response.send('OMG NO Robots!? :(')
  }
})

app.listen(3000, function(){
    console.log('Server Started on Port 3000...')
})
