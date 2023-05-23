const counter=document.querySelector('.counter');
const incr=document.querySelector('.incr');
const decr=document.querySelector('.decr');
let count=0;
incr.addEventListener("click",()=>{
    count++;
    counter.innerHTML=count;
});
decr.addEventListener("click",()=>{
    count--;
    counter.innerHTML=count;
});