function withdraw() {
  let amount = Number(wd.value);
  let req = JSON.parse(localStorage.getItem("withdraw")) || [];

  req.push({
    user: u,
    amount,
    status: "Chờ duyệt"
  });

  localStorage.setItem("withdraw", JSON.stringify(req));
  alert("Đã gửi yêu cầu rút");
}
