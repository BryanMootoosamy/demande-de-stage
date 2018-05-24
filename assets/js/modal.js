let modalButton = document.getElementById('modalButton');
let modal = document.getElementById('modalbox');
let sendButton = document.getElementById('sendMail');
let recruteurMail = document.getElementById('recruteurmail');
let recruteurMessage = document.getElementById('recruteurmessage');
modalButton.addEventListener('click', function(event){
    event.preventDefault();
    modal.classList.toggle('modalafter');
});
sendButton.addEventListener('click', function(){
    let data = {
        email: recruteurMail.value,
        message: recruteurMessage.value
    };
    let dataToSend = new Ajax('model/sendmail.php', 'post', true);
    dataToSend.newPostRequest('email=' + data.email+ '&message=' + data.message);
    recruteurMail.value = '';
    recruteurMessage.value = '';
})