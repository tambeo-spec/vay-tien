let coin = 1000;

function r(){
 return Math.floor(Math.random()*6)+1;
}

function play(type){
 let b = +bet.value;
 if(!b || b<=0) return alert("Nhập xu");
 if(coin < b) return alert("Không đủ xu");

 let d1=r(),d2=r(),d3=r();
 let sum=d1+d2+d3;
 let k = sum>=11 ? "TAI":"XIU";

 dice.innerText = `${d1} 🎲 ${d2} 🎲 ${d3}`;

 if(type==k){
  coin += b;
  rs.innerText = "✅ THẮNG ("+sum+")";
 }else{
  coin -= b;
  rs.innerText = "❌ THUA ("+sum+")";
 }

 document.getElementById("coin").innerText = coin;
}
