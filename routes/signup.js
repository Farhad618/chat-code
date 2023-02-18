const express = require('express')
const router = express.Router()
const fs = require("fs")
const users = require("../db/users.json");

router.post('/', (req, res)=>{
	const {username, password} = req.body
	//checking if the username and password is not empty
	if (username && password) {
		// checking if the user already exists or not
		for(let user of users){
			if (user.username == req.body.username) {
				// res.send('User already exixts...')
				res.redirect('/signup.html')
				return
			}
		}
		users.push({username, password});
		   
		// Writing to a file
		// here in stringify() method null, 2 is used to append data in a indexed format
		fs.writeFile("./db/users.json", JSON.stringify(users, null, 2), err => {     
		    // Checking for errors
		    if (err) throw err;
		});

		req.session.username = username
		req.session.password = password
		// res.send('User created successfully')
		res.redirect('/')		
	} else {
		res.redirect('/signup.html')
	}


})

module.exports = router