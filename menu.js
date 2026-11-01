// Task 7: open/close the dropdown when the profile photo is clicked
const loginLink = document.querySelector(".login-link");
const dropdown = document.getElementById("dropdown");

loginLink.addEventListener("click", event => {
  if (location.hash !== "#logged-in") return;   // signed out: let the link go to login.html
  event.preventDefault();               // don't go to login.html
  dropdown.classList.toggle("open");    // add "open" if missing, remove if present
});

// Show the email typed on the login page (it is in the URL after "?email=")
const email = new URLSearchParams(location.search).get("email");
if (email) {
  document.getElementById("user-email").textContent = email;
  document.getElementById("user-name").textContent = email.split("@")[0].replace(".", " ");  // text before the @, dot becomes a space
}
