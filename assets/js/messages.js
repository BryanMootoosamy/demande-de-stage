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
let startMessage = () => {
    addTimeout('incoming', "Bonjour Mr, Je m'appelle Bryan et je suis à la recherche d'un stage pour le mois d'Août !", 2000);
    addTimeout('outgoing',"Bonjour ! Dites m'en plus ?" ,4000);
    addTimeout('incoming',"Dans le cadre de ma formation BeCode Charleroi, je suis à la recherche d'un stage dans le développement web !",6000);
    addTimeout('outgoing','Très bien.',7000);
    addTimeout('outgoing','Quelles sont vos compétences ?',9000);
    addTimeout('incoming','En ce qui concerne le front-end:',11000);
    addTimeout('incoming','HTML5, CSS, SASS, JS, REACT',13000);
    addTimeout('incoming','En ce qui concerne le back-end:',15000);
    addTimeout('incoming','PHP (notamment orienté objet), ReactPHP.',17000);
    addTimeout('outgoing','Autre chose ? Une remarque ?',19000);
    addTimeout('incoming',"Je dois ajouter que même si je suis fullstack avec une préférence pour le backend, n'étant pas designer, je peux suivre une maquette mais je ne peux moi-même créer un design.",21000);

}
