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
        } else if (parameter == 'backend') {
            let backendMessage = document.createElement('p');
            backendMessage.setAttribute('class', 'backendMSG');
            backendMessage.innerHTML = message;
            messageScreen.appendChild(backendMessage);
        }
    }, time);
};
addTimeout('incoming', "Bonjour Mr, Je m'appelle Bryan et je suis à la recherche d'un stage pour le mois d'Août !", 3000);
addTimeout('outgoing',"Bonjour ! Dites m'en plus ?" ,6000);
addTimeout('incoming',"Dans le cadre de ma formation BeCode Charleroi, je suis à la recherche d'un stage dans le développement web !",9000);
addTimeout('outgoing','Très bien.',11000);
addTimeout('outgoing','Quelles sont vos compétences ?',13000);