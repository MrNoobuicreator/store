/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "JamJam12Plus",
		password: "MurrAJ16"
	},
	{ // Object @ 1 index
		username: "blank",
		password: "blank"
	},
	{ // Object @ 2 index
		username: "blank",
		password: "blank"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			window.open('https://tweakdoor.com/store')
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}
