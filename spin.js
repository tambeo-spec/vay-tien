let u = localStorage.getItem("currentUser");
let users = JSON.parse(localStorage.getItem("users"));

function spin() {
  let bet = Number(betSelect.value);
  if (users[u].balance < bet) return alert("Không đủ tiền");
  if (users[u].spins <= 0) return alert("Hết lượt");

  users[u].balance -= bet;
  users[u].spins--;

  let rewards = [
    { text: "x2", money: bet * 2 },
    { text: "x5", money: bet * 5 },
    { text: "Mất", money: 0 }
  ];

  let r = rewards[Math.floor(Math.random() * rewards.length)];
  users[u].balance += r.money;

  users[u].history.push({
    time: new Date().toLocaleString(),
    bet,
    result: r.text,
    win: r.money
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert(`Kết quả: ${r.text}`);
}
