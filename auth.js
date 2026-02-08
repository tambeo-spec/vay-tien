function register() {
  let u = user.value;
  let p = pass.value;

  let users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[u]) return alert("Tài khoản tồn tại");

  users[u] = {
    pass: p,
    balance: 100000,
    vip: false,
    spins: 5,
    history: []
  };

  localStorage.setItem("users", JSON.stringify(users));
  alert("Đăng ký thành công");
  location.href = "index.html";
}

function login() {
  let users = JSON.parse(localStorage.getItem("users")) || {};
  if (!users[user.value] || users[user.value].pass !== pass.value)
    return alert("Sai tài khoản");

  localStorage.setItem("currentUser", user.value);
  location.href = "lobby.html";
}
