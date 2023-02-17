const express = require('express')
const router = express.Router()
const fs = require("fs")
const users = require("../db/users.json");
const chats = require("../db/chats.json");

router.post('/', (req, res)=>{
	const {chatcontent} = req.body
	username = req.session.username
	password = req.session.password
	roomno = req.session.roomno
	// checking if the user exists or not
	for(let user of users){
		if (user.username == username && user.password == password) {
			chats.push({username, roomno, chatcontent})
			// Writing to a file
			// here in stringify() method null, 2 is used to append data in a indexed format
			fs.writeFile("./db/chats.json", JSON.stringify(chats, null, 2), err => {     
			    // Checking for errors
			    if (err) throw err;
			});

			
					
			res.redirect('/')
			return
		}
	}

	console.log(6)
	res.redirect('/signin.html')

})

module.exports = router