let u = localStorage.getItem("currentUser");

function deposit() {
  let amt = Number(dep.value);
  let users = JSON.parse(localStorage.getItem("users"));
  users[u].balance += amt;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Nạp thành công");
}

function withdraw() {
  let amt = Number(wd.value);
  let req = JSON.parse(localStorage.getItem("withdrawRequests")) || [];

  req.push({
    user: u,
    amount: amt,
    status: "Chờ duyệt"
  });

  localStorage.setItem("withdrawRequests", JSON.stringify(req));
  alert("Đã gửi yêu cầu rút");
}
