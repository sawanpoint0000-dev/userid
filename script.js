// 🔒 FIXED PASSWORD
const FIXED_PASSWORD = "Banti@kumar1";

function generate(){
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  if(!email || !mobile) return;

  // ID: rahul268i (no underscore)
  const base = email.split("@")[0].replace(/[^a-zA-Z]/g,"").toLowerCase();
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let id = base;
  id += Math.floor(Math.random()*10);
  id += letters[Math.floor(Math.random()*letters.length)];
  id += letters[Math.floor(Math.random()*letters.length)];
  id += letters[Math.floor(Math.random()*letters.length)];

  // Set values
  document.getElementById("pass").value = FIXED_PASSWORD;
  document.getElementById("userid").value = id;
  document.getElementById("phone").value = mobile;
  document.getElementById("mailout").value = email;

  // Final / Remote output (PASSWORD EXCLUDED)
  document.getElementById("final").value =
`${id}
${mobile}
${email}`;
}

function copyText(btn, id){
  navigator.clipboard.writeText(document.getElementById(id).value);
  btn.classList.add("copied");
}

function copyAll(btn){
  navigator.clipboard.writeText(document.getElementById("final").value);
  btn.classList.add("copied");
}
