const express = require('express')
const router = express.Router()
const fs = require("fs")
const users = require("../db/users.json");
const chats = require("../db/chats.json");

// auth/allchats
router.get('/', (req, res)=>{
	username = req.session.username
	password = req.session.password
	roomno = req.session.roomno
	let chatarray = []
	// checking if the user exists or not
	for(let user of users){
		if (user.username == username && user.password == password) {
			for(let chat of chats){
			  if (chat.roomno == roomno) {
			    chatarray.push(chat)
			  }
			}			
					
			res.send(chatarray)
			return
		}
	}
	res.redirect('/signin.html')

})

module.exports = router