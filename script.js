const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let btn = document.getElementById("btn")
let passOne = ""
let passTwo = ""


btn.addEventListener('click', ()=>{
    passOne = ""
    passTwo = ""

    for(let i=0; i<15; i++){
        let randomIndex = Math.floor(Math.random()*characters.length)
        passOne += characters[randomIndex]
        passwordOne.textContent = passOne
    }
    
    for(let i=0; i<15; i++){
        let randomIndex = Math.floor(Math.random()*characters.length)
        passTwo += characters[randomIndex]
        passwordTwo.textContent = passTwo
    }
})


// copy on click
passwordOne.onclick = function() {
  document.execCommand("copy");
}

passwordTwo.onclick = function() {
    document.execCommand("copy");
}

passwordOne.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", passwordOne.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

passwordTwo.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", passwordTwo.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });
