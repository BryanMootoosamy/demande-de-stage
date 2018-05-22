let messageScreen = document.getElementById('screen');
let addTimeout = (parameter, message, time) => {
    setTimeout(function(){
        if (parameter == 'incoming') {
            let incomingMessage = document.createElement('p');
            incomingMessage.setAttribute('class', 'incomingMSG');
            incomingMessage.innerHTML = message;
            messageScreen.appendChild(incomingMessage);
        } else if (parameter == 'outgoing') {
            let outgoingMessage = document.createElement('p');
            outgoingMessage.setAttribute('class', 'outgoingMSG');
            outgoingMessage.innerHTML = message;
            messageScreen.appendChild(outgoingMessage);
        }
    }, time);
};
addTimeout('incoming', 'test', 5000);