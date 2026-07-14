// =========================
// HAPPY BIRTHDAY FIRZA
// =========================

const loader = document.getElementById("loader");
const main = document.getElementById("main");
const startBtn = document.getElementById("startBtn");

const music = document.getElementById("bgMusic");

startBtn.onclick = () => {

    loader.style.display = "none";

    main.classList.remove("hidden");

    if(music){
        music.play().catch(()=>{});
    }

    createHearts();

};

// =========================
// Countdown
// =========================

const startDate = new Date("December 23, 2025 00:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = now - startDate;

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerHTML=days;

    document.getElementById("hours").innerHTML=hours;

    document.getElementById("minutes").innerHTML=minutes;

    document.getElementById("seconds").innerHTML=seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();

// =========================
// Typing Effect
// =========================

const text = `

Selamat ulang tahun sayangku Firza Tiara Ansyah ❤️

Terima kasih sudah hadir dalam hidupku.

Terima kasih sudah membuat hari-hariku menjadi lebih indah.

Semoga semua impianmu tercapai.

Semoga kamu selalu sehat.

Semoga kebahagiaan selalu menyertaimu.

Aku akan selalu mendoakan yang terbaik untukmu.

I Love You ❤️

- Rizky Saputra Ramadhon

`;

let i=0;

function typing(){

    if(i<text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,40);

    }

}

// =========================
// Love Button
// =========================

const loveButton = document.getElementById("loveButton");

const loveResult = document.getElementById("loveResult");

loveButton.onclick = ()=>{

    loveResult.style.display="block";

    typing();

};

// =========================
// Floating Hearts
// =========================

function createHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.animation="floatHeart 6s linear";

heart.style.zIndex="999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},350);

}

// =========================
// Floating Heart Animation
// =========================

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{

transform:translateY(0) rotate(0deg);

opacity:1;

}

100%{

transform:translateY(-110vh) rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);
