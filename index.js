const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const session = require("express-session")
const { v4: uuidv4 } = require('uuid')
const app = express()
const port = 3000

// set views
app.set('views', path.join(__dirname, 'public'))
// Set EJS as templating engine
app.set('view engine', 'ejs');

// creating session
app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true
}))

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

// action routes
app.use('/auth/signup', require('./routes/signup'))
app.use('/auth/signin', require('./routes/signin'))
app.use('/auth/logout', require('./routes/logout'))
app.use('/auth/getroom', require('./routes/getroom'))

// view routes
app.use('/', express.static(path.join(__dirname, 'public')))
app.get('/', (req, res)=>{
  username = req.session.username
  roomno = req.session.roomno
  if (req.session.username) {
    if (roomno) {
      res.render('index', {username, roomno})
    }else{
      res.redirect('addtoroom.html')
    }
  } else {
    res.redirect('signin.html')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
