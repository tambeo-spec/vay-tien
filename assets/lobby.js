const tabs = document.querySelectorAll(".tab");
const tabc = document.querySelectorAll(".tabc");

let vip = localStorage.vip || "Thường";
document.getElementById("vipText").innerText = vip;

const icons = {
 hot: "https://cdn-icons-png.flaticon.com/512/1041/1041873.png",
 casino: "https://cdn-icons-png.flaticon.com/512/168/168882.png",
 slot: "https://cdn-icons-png.flaticon.com/512/814/814513.png",
 other: "https://cdn-icons-png.flaticon.com/512/565/565547.png"
};

function makeGame(name, icon, level, link){
 let g = document.createElement("a");
 g.className = "game " + (level||"");
 g.innerHTML = `
   <img src="${icon}">
   <span>${name}</span>
 
}

function allow(level){
 if(level=="vip") return vip!="Thường";
 if(level=="diamond") return vip=="Kim Cương";
 return true;
}

// HOT (13)
tabc[0].appendChild(makeGame("Tài Xỉu",icons.hot,"vip","taixiu.html"));
for(let i=1;i<=12;i++)
 tabc[0].appendChild(makeGame("Game Hot "+i,icons.hot));

// CASINO (15)
for(let i=1;i<=15;i++)
 tabc[1].appendChild(makeGame("Casino "+i,icons.casino,"vip"));

// SLOT (15)
for(let i=1;i<=15;i++)
 tabc[2].appendChild(makeGame("Slot "+i,icons.slot,"diamond"));

// KHÁC (7)
for(let i=1;i<=7;i++)
 tabc[3].appendChild(makeGame("Khác "+i,icons.other));

// TAB
function showTab(i){
 tabs.forEach(t=>t.classList.remove("active"));
 tabc.forEach(t=>t.style.display="none");
 tabs[i].classList.add("active");
 tabc[i].style.display="grid";
}
window.showTab = showTab;

// VIP
function upVip(){
 if(vip=="Thường" && confirm("Nâng VIP?")){
  vip="VIP";
 }else if(vip=="VIP" && confirm("Nâng Kim Cương?")){
  vip="Kim Cương";
 }else if(vip=="Kim Cương"){
  alert("Bạn đã là Kim Cương 💎");
 }
 localStorage.vip=vip;
 location.reload();
}
window.upVip = upVip;
