var currentAudio = null;

function toggleSound(button, soundFile) {
    if (currentAudio && !currentAudio.paused) { // Si un son est déjà en cours de lecture
        currentAudio.pause(); // Arrête la lecture du son en cours
        currentAudio = null; // Réinitialise l'élément audio actuel
        button.classList.remove('playing'); // Supprime la classe 'playing' du bouton
    } else { // Si aucun son n'est en cours de lecture
        var audio = new Audio(soundFile);
        audio.play();

        // Ajoute la classe 'playing' au bouton en cours de lecture
        button.classList.add('playing');

        // Enregistre l'élément audio actuel pour le futur arrêt
        currentAudio = audio;

        // Supprime la classe 'playing' lorsque la lecture du son est terminée
        audio.addEventListener('ended', function() {
            button.classList.remove('playing');
        });
    }
}