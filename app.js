var express = require('express')
var mustacheExpress = require('mustache-express')
const robotFunc = require('./robotFunc')

var app = express()

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.use(express.static('public'))


app.get('/', function(request, response){
  response.render('index', {
    Title: 'Robots Are Human'
  })
})

app.get('/robotDirectory', function(request, response){
  const robotDirectory = robotFunc.getRobots()
    response.render('robotLoop',{
      robotDirectory: robotDirectory
  })
})

app.get('/robotDirectory/:id', function (request, response){
  const specialRobot = robotFunc.getRobot(request.params.id)
  if (specialRobot.id){
    response.render('robotDetails', pickedRobot)
  } else {
    response.send('OMG NO Robots!? :(')
  }
})

app.listen(3000, function(){
    console.log('Server Started on Port 3000...');
})
