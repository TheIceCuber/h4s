let currentAudio = null; // Keeps track of the currently playing audio

function toggleAudio(src) {
    const movingImage = document.getElementById('moving-image'); // Get the image element

    if (currentAudio && currentAudio.src.endsWith(src)) {
        // If the same audio is clicked
        if (currentAudio.paused) {
            currentAudio.play(); // Resume playback
            movingImage.style.display = 'block'; // Show the image
        } else {
            currentAudio.pause(); // Pause playback
            movingImage.style.display = 'none'; // Hide the image
        }
    } else {
        // If a different audio is clicked
        if (currentAudio) {
            currentAudio.pause(); // Pause the currently playing audio
            movingImage.style.display = 'none'; // Hide the image if a new audio is clicked
        }
        currentAudio = new Audio(); // Create a new Audio object
        currentAudio.src = src; // Set the new source
        currentAudio.loop = true; // Enable looping

        currentAudio.play(); // Start playing the new audio
        movingImage.style.display = 'block'; // Show the image when audio starts
    }

    // Hide the image when audio ends
    currentAudio.onended = () => {
        movingImage.style.display = 'none'; // Hide the image
    };
}

function changeVolume(value) {
  if (currentAudio) {
      currentAudio.volume = value; // Update the volume of the current audio
  }
}
