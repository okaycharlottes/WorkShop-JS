//1. Récuperer l'element <canvas> du DOM 
let canvas= document.querySelector("#gameZone"); //ou document.getElementById("gameZone")

//2. Appeler le contexte(=les axes utilisés pour dessiner) de l'element <canvas> 
let contexte= canvas.getContext('2d');

//3. Initialiser un SetInterval (permet que la fonction principale soit toujours verifiée toutes les un certain nombre de millisecondes)
window.onload= () => { 
    
    let RunTheGame = setInterval(game,100); 
}

//4. Créer la fonction principale du jeu: game()

//5. Définir l'object Snake: const snake={}

//6. Afficher notre Snake dans le <canvas>: contexte.fillRect(x,y, width, height) & contexte.fillStyle="color"

//7. Faire bouger le Snake: snake.position.x++ 

//8. Effacer sa trace: contexte.clearRect(x,y, width, height)

//9. Manipuler le Snake avec les touches du clavier (keycode)

//10. Empecher le Snake de faire demi-tour

//11. Définir le corps du Snake: const Snake={corps:[]} 

//12. Changer le mode de déplacement du Snake

//13. Adapter la vitesse du Snake: setInterval(game, snake.vitesse)

//14. Diviser le corps du Snake en section

//15. Définir l'object pomme: const pomme={}

//16. Dans la fonction game définit plus haut, vérifier s'il y a des collisions entre la pomme et le Snake

//17. Adapter le comportement du Snake et de la pomme s'il y a collisions

//18. Afficher un score.


