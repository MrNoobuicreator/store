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
		username: "Kody",
		password: "mrnoob3657"
	},
	{ // Object @ 2 index
		username: "ScottyToHoty",
		password: "Scotty"
	},
        { // Object @ 3 index
		username: "JackSimp",
		password: "Jack"
	}
        

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			window.location.href = 'https://ecstatic-payne-d856fb.netlify.app/'
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}
