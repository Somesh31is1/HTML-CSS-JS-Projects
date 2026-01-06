const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

let intervalId;

startBtn.addEventListener('click' ,startColor);
stopBtn.addEventListener('click', stopColor);

function getRandomColor(){
  const letters = "0123456789ABCDEF";
  let color = "#";
  for(let i=0; i<6; i++){ //i<6 bcz hexcode value for a color has 6 characters after '#';
    color+=letters[Math.floor(Math.random() *16)];
  }
  return color;
}

function startColor(){
  if(!intervalId){
    intervalId = setInterval(function () {
      document.body.style.backgroundColor = getRandomColor();
    }, 1000);

  }
}
  
function stopColor(){
  clearInterval(intervalId);
  intervalId = null;
}

