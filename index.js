const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 


app.use('/auth/signup', require('./routes/signup'))
app.use('/auth/signin', require('./routes/signin'))

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
