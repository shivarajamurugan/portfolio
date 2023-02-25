let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

// let cursor1 = document.querySelector('.cursor-1');
// let cursor2 = document.querySelector('.cursor-2');

// window.onmousemove = (e) =>{
//     cursor1.style.top = e.pageY + 'px';
//     cursor1.style.left = e.pageX + 'px';
//     cursor2.style.top = e.pageY + 'px';
//     cursor2.style.left = e.pageX + 'px';
// }

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});


var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('message').value;
    var body='name: ' +name + '<br/> email: ' +email + '<br/> message' + message;


    Email.send({
    Host : "smtp.gmail.com",
    Username : "raja.shivaraja2000@gmail.com",
    Password : "ofgtawgvidhywsag",
    To : 'raja.shivaraja2000@gmail.com',
    From : email,
    Subject : "This is the subject",
    Body : body
}).then(
  message => alert(message)
);
})