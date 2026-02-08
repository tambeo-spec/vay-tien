let u = localStorage.getItem("currentUser");
let users = JSON.parse(localStorage.getItem("users"));

function spin() {
  let bet = Number(document.getElementById("bet").value);
  if (users[u].balance < bet) return alert("Không đủ tiền");
  if (users[u].spins <= 0) return alert("Hết lượt quay");

  users[u].balance -= bet;
  users[u].spins--;

  const slots = [
    { name: "x2", win: bet * 2 },
    { name: "x5", win: bet * 5 },
    { name: "Mất", win: 0 },
    { name: "+1 lượt", win: 0, spin: 1 }
  ];

  let r = slots[Math.floor(Math.random() * slots.length)];

  if (r.win) users[u].balance += r.win;
  if (r.spin) users[u].spins += r.spin;

  users[u].history.push({
    time: new Date().toLocaleString(),
    bet,
    result: r.name,
    win: r.win || 0
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("🎉 Kết quả: " + r.name);
  location.reload();
}
