const express = require('express')
const router = express.Router()
const fs = require("fs")
const users = require("../db/users.json");

router.post('/', (req, res)=>{
	const {username, password} = req.body
	// checking if the user already exists or not
	for(let user of users){
		if (user.username == username && user.password == password) {
			// res.send('User already exixts...')
			req.session.username = username
			res.redirect('/')
			return
		}
	}
	
	// res.send('User created successfully')
	res.redirect('/signin.html')

})

module.exports = router