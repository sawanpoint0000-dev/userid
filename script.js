function randomPass(){
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower="abcdefghijklmnopqrstuvwxyz";
    let num="0123456789";
    let sp="@#$!";

    let pass="";
    pass+=upper[Math.floor(Math.random()*upper.length)];
    pass+=lower[Math.floor(Math.random()*lower.length)];
    pass+=num[Math.floor(Math.random()*num.length)];
    pass+=num[Math.floor(Math.random()*num.length)];
    pass+=sp[Math.floor(Math.random()*sp.length)];
    pass+=sp[Math.floor(Math.random()*sp.length)];

    let all=upper+lower+num+sp;
    while(pass.length<8){
        pass+=all[Math.floor(Math.random()*all.length)];
    }
    return pass.split('').sort(()=>0.5-Math.random()).join('');
}

function generate(){
    let email=document.getElementById("email").value.trim();
    let mobile=document.getElementById("mobile").value.trim();
    if(!email||!mobile) return;

    let base=email.split("@")[0].replace(/[^a-zA-Z]/g,"").toLowerCase();
    let letters="abcdefghijklmnopqrstuvwxyz";

    let id=base;
    id+=Math.floor(Math.random()*10);
    id+=letters[Math.floor(Math.random()*letters.length)];
    id+=letters[Math.floor(Math.random()*letters.length)];
    id+=letters[Math.floor(Math.random()*letters.length)];

    pass.value=randomPass();
    userid.value=id;
    phone.value=mobile;
    mailout.value=email;

    final.value=
`${pass.value}
${id}
${mobile}
${email}`;
}

function copyText(btn,id){
    navigator.clipboard.writeText(document.getElementById(id).value);
    btn.classList.add("copied");
}

function copyAll(btn){
    navigator.clipboard.writeText(final.value);
    btn.classList.add("copied");
}
