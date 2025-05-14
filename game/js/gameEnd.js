//חזרה למשחק
let Button0 = document.getElementById('button0');
Button0.addEventListener("click", () => {
    window.location = "../html/game.html";
});

 
let currentTimer=localStorage.getItem('timer');
 document.getElementById('time').innerText=currentTimer;
 
console.log(currentTimer);

//יציאה מהאתר
let Button1=document.getElementById('button1');
Button1.addEventListener('click',()=>{
    
    localStorage.setItem('current user',null);
    localStorage.removeItem('timer');
     window.location = "../html/login.html";
});

//ניקוד נוכחי
 
 

