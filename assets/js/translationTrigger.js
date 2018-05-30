let button = document.getElementById('redeye');
let hal = document.getElementById('hal');
let intro = document.getElementById('intro');
let chatbox = document.getElementById('chatbox');
let contactButton = document.getElementById('button');
button.addEventListener('click', function(){
    intro.classList.add('fadeout');
    hal.classList.add('translate');
    chatbox.classList.add('showChatBox');
    startMessage();
    setTimeout(function(){
        contactButton.classList.add('buttonafter');
    }, 45000);
});