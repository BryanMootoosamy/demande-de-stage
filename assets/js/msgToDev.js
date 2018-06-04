let addConsoleMSG = (message, time) => {
    setTimeout(function() {
        console.log(message);
    }, time);
};
addConsoleMSG("Bonjour, comment allez-vous ?", 1000);
addConsoleMSG("vous pouvez retrouver le code source de ce site en suivant ce lien: https://github.com/BryanMootoosamy/demande-de-stage", 2000);
addConsoleMSG("La structure adoptée pour le site est la structure MVC car je voulais privilégier à la fois l'ordre et la facilité de relecture du code", 3000);
addConsoleMSG("Aussi, en ce qui concerne le traitement des données de formulaire, celui-ci se fait en passant par une requète AJAX pointant vers un fichier non requis dans le code mais que vous pourrez retrouver sur mon github dans le dossier model du repo donné ci-dessus (le fichier s'appelle 'sendmail.php').", 4000);
addConsoleMSG("Pour tout renseignement, n'hésitez pas à me contacter ! Passez une bonne journée !", 5000);