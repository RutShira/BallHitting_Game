let  checkForm=false;
//for my style

const container = document.querySelector("#container");

document.getElementById('signUp').addEventListener('click', () => {
	container.classList.add("right-panel-active");
	 document.getElementById('form2').style.opacity=0;
});

document.getElementById('signIn').addEventListener('click', () => {
	container.classList.remove("right-panel-active");
	document.getElementById('form2').style.opacity=1;
	
});

//function for new user
document.getElementById('signUpButton').addEventListener('click', () => {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email1").value;
	let password = document.getElementById("password1").value;

      //put the new user in the array
    
	let users = JSON.parse(localStorage.getItem("gamers")) || [];
	let newUser = {
		"name": name,
		"email": email,
		"password": password,
		"minTime": '60:00'
	}
	
	 
		// בדוק אם הקוד כבר קיים
		const existingUser = users.find(newUser => newUser.password === password);
		let Pin=users.find(item => item.email===email);
	if(name&&email&&password&&!Pin&&!existingUser){
		checkForm=true;
	}
   else if(Pin){
		alert("קיים במערכת.");
	}
	else  if (existingUser) {
			alert("הקוד כבר קיים. אנא בחר קוד אחר.");
			
		}
		if(checkForm){
			users.push(newUser);
			localStorage.setItem(`you sign!`, 1);
			alert("נרשמת בהצלחה.")
			setTimeout( window.location="../html/game.html",3000);}
	
		// הוסף את המשתמש למערך אם הקוד תקין

		console.log("המשתמש נרשם בהצלחה!");
		 
	 
	localStorage.setItem('gamers', JSON.stringify(users));
	localStorage.setItem('current user', JSON.stringify(newUser)); 
	 
	
	   
   
	 	
	 
});

//function for exists user
   document.getElementById('loginButton').addEventListener ('click', () => {
	let email = document.getElementById("email2").value;
	let password = document.getElementById("password2").value;

	let user = {
		"email": email,
		"password": password
	};

	let users = JSON.parse(localStorage.getItem("gamers"));
	if (!users) {
		alert("לא קיים במערכת. אנא הירשם.");
		return;
	}
	if(email&&password){
	let existUser = users.find(u => u.email == email);
	if (existUser != null) {
		if (existUser.password == password) {
		    alert(`hello to ${existUser.name}`);
			localStorage.setItem('current user', JSON.stringify(existUser));
			localStorage.setItem(`you sign!`, 1); 
			setTimeout(window.location.href="../html/game.html",3000);        //----------------to game!!!!!!!!!!!!!!!!!
		}
		else {
			alert(".סיסמא שגויה");
		}
	}
	else {
		alert("לא קיים במערכת. אנא הירשם.");
	}}
	else{
		alert(".הכנס פרטים");
	}
});

