function togglePassword() {
  let password = document.getElementById("password");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function login(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "Budi@gmail.com" && password === "Budi123") {
    alert("Login berhasil!");

    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password salah!");

    document.getElementById("password").value = "";
  }
}
