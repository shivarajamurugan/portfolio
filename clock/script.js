const hourel=document.getElementById("hour");
const minuteel=document.getElementById("minute");
const secondel=document.getElementById("second");


function updatetime(){
  let hour = new Date().getHours();
  let minute =new Date().getMinutes();
  let second =new Date().getSeconds();


  hourel.innerHTML=hour;
  minuteel.innerHTML=minute;
  secondel.innerHTML=second;

  second = (second < 10) ? '0'+second :second;

  setInterval(() =>{
    updatetime()
  },1000)

}

updatetime();