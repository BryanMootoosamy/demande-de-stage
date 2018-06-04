let messageScreen = document.getElementById('screen');
let addTimeout = (parameter, message, time) => {
    setTimeout(function(){
        if (parameter == 'incoming') {
            let incomingMessage = document.createElement('p');
            incomingMessage.setAttribute('class', 'incomingMSG');
            incomingMessage.innerHTML = message;
            messageScreen.appendChild(incomingMessage);
            messageScreen.scrollTop = messageScreen.scrollHeight;
        } else if (parameter == 'outgoing') {
            let outgoingMessage = document.createElement('p');
            outgoingMessage.setAttribute('class', 'outgoingMSG');
            outgoingMessage.innerHTML = message;
            messageScreen.appendChild(outgoingMessage);
            messageScreen.scrollTop = messageScreen.scrollHeight;
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
    addTimeout('incoming',"Je dois ajouter que même si je suis fullstack avec une préférence pour le backend, n'étant pas designer, je peux suivre une maquette mais je ne peux moi-même créer un design.",23000);
    addTimeout('outgoing', 'Et que recherchez-vous dans notre entreprise ?', 26000);
    addTimeout('incoming', "Je recherche un environnement de travail qui me permette d'approfondir mes connaissances essentiellement en PHP, ReactPHP, Javascript mais aussi d'en développer de nouvelles dans des languages tels que kotlin, node.js, python et java.", 30000);
    addTimeout('outgoing', 'Et que pensez-vous pouvoir nous apporter ?', 33000);
    addTimeout('incoming', "un esprit passionné et assidu, toujours à la recherche de nouvelles technologies à employer. Aussi, étant autodidacte, je me dois toujours de combler mes lacunes dès qu'il y en a afin de toujours rester le plus productif possible.", 37000);
    addTimeout('outgoing', "Entendu ! comment puis-je vous contacter ?", 43000);
    addTimeout('incoming', "Soit en répondant au Mail, soit en utilisant le bouton contact ci-dessous ou enfin en me contactant sur mon GSM au 0494682531.", 45000);
    addTimeout('incoming', "Vous pouvez également visiter mon <a href='https://mootoosamybryan.be'>site contenant mon portfolio</a> ainsi que mon <a href='https://github.com/BryanMootoosamy?tab=repositories'>github</a> !", 47000);
};
