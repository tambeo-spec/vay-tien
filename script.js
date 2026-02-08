let spinning = false;
let currentDeg = 0;

const rewards = [
  "🎁 10.000 VNĐ",
  "💎 1 Kim Cương",
  "😢 Chúc bạn may mắn lần sau",
  "🎉 50.000 VNĐ",
  "💰 100.000 VNĐ",
  "⭐ Thêm 1 lượt quay"
];

function spin() {
  if (spinning) return;
  spinning = true;

  const wheel = document.getElementById("wheel");
  const result = document.getElementById("result");

  const randomDeg = Math.floor(Math.random() * 360) + 1800;
  currentDeg += randomDeg;

  wheel.style.transform = `rotate(${currentDeg}deg)`;
  result.innerText = "⏳ Đang quay...";

  setTimeout(() => {
    const index = Math.floor(((360 - (currentDeg % 360)) / 60)) % 6;
    result.innerText = "Kết quả: " + rewards[index];
    spinning = false;
  }, 4200);
}
