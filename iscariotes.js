const correctPassword = "iscariote"; // La contraseña correcta

function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const errorMessage = document.getElementById("errorMessage");

  if (input === correctPassword) {
    window.location.href = "htmltest.html";
  } else {
    errorMessage.style.display = "block";
  }
}

const fileInput = document.getElementById("fileInput");
const audioPlayer = document.getElementById("audioPlayer");

fileInput.addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    audioPlayer.src = fileURL;
    audioPlayer.style.display = "block";
  }
});