let req = JSON.parse(localStorage.getItem("withdraw")) || [];
let users = JSON.parse(localStorage.getItem("users"));

function approve(i) {
  let r = req[i];
  users[r.user].balance -= r.amount;
  r.status = "Đã duyệt";

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("withdraw", JSON.stringify(req));
  location.reload();
}
