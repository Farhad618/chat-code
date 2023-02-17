const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{
	// checking if the room no. is empyt
	if (req.body.roomno != '') {
		req.session.roomno = req.body.roomno
		res.redirect('/')
	} else{
		res.redirect('/addtoroom.html')
	}

})

module.exports = router