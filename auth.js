function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || {};
}

function saveUsers(u) {
  localStorage.setItem("users", JSON.stringify(u));
}

function register() {
  let u = user.value.trim();
  let p = pass.value.trim();
  if (!u || !p) return alert("Nhập đủ thông tin");

  let users = getUsers();
  if (users[u]) return alert("Tài khoản tồn tại");

  users[u] = {
    pass: p,
    balance: 100000,
    vip: false,
    spins: 5,
    history: []
  };

  saveUsers(users);
  alert("Đăng ký thành công");
  location.href = "index.html";
}

function login() {
  let users = getUsers();
  let u = user.value.trim();
  let p = pass.value.trim();

  if (!users[u] || users[u].pass !== p)
    return alert("Sai tài khoản hoặc mật khẩu");

  localStorage.setItem("currentUser", u);
  location.href = "lobby.html";
}
