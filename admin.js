if (prompt("Admin password") !== "admin123")
  location.href="index.html";

let req = JSON.parse(localStorage.getItem("withdrawRequests")) || [];
let users = JSON.parse(localStorage.getItem("users"));

list.innerHTML = req.map((r,i)=>`
<p>
${r.user} | ${r.amount} | ${r.status}
<button onclick="approve(${i})">Duyệt</button>
</p>
`).join("");

function approve(i){
  let r = req[i];
  if (r.status !== "Chờ duyệt") return;

  users[r.user].balance -= r.amount;
  r.status = "Đã duyệt";

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("withdrawRequests", JSON.stringify(req));
  location.reload();
}
