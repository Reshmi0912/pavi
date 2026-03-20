function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user === "pavi" && pass === "2435") {
    document.getElementById("loginPage").classList.remove("active");
    document.getElementById("optionPage").classList.add("active");
  } else {
    document.getElementById("error").innerText = "Wrong details! Try again 💔";
  }
}

function showPhotos() {
  document.getElementById("optionPage").classList.remove("active");
  document.getElementById("mainPage").classList.add("active");
}

function showGifts() {
  document.getElementById("funnyMessage").innerText = "😂 There is no gift! Because I am the world's best gift to you 💅✨";
}
