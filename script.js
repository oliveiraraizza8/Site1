function abrirMenu(){
  document.getElementById("menu").classList.toggle("ativo");
}

function mostrar(id){
  document.querySelectorAll(".secao").forEach(s => s.style.display = "none");
  document.getElementById(id).style.display = "block";
  document.getElementById("menu").classList.remove("ativo");
}

mostrar("sec1");

/* SWIPER */
const swiper1 = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true
});

const swiper2 = new Swiper(".mySwiper2", {
  effect: "flip",
  grabCursor: true
});

/* QUIZ 1 */
let i1 = 0, acertos1 = 0;

const p1 = [
{q:"Imperialismo foi no século?",o:["XIX","XV","XXI"],c:0},
{q:"Principal objetivo?",o:["Exploração","Esportes","Turismo"],c:0},
{q:"Quem explorava o Congo?",o:["Bélgica","Brasil","Japão"],c:0},
{q:"Recurso do Congo?",o:["Borracha","Petróleo","Água"],c:0},
{q:"Sistema ligado?",o:["Capitalismo","Feudalismo","Nomadismo"],c:0}
];

function mostrar1(){
  if(i1 >= p1.length){
    document.getElementById("pergunta1").innerText = "Fim! Acertos: " + acertos1;
    return;
  }

  let p = p1[i1];
  document.getElementById("pergunta1").innerText = p.q;

  let op = [...p.o].sort(()=>Math.random()-0.5);

  document.querySelectorAll(".respostas1 button").forEach((b,i)=>{
    b.innerText = op[i];
    b.dataset.c = (op[i] == p.o[p.c]);
  });

  document.getElementById("resultado1").innerText = "";
  document.getElementById("btnProx1").style.display = "none";
}

function responder1(btn){
  if(btn.dataset.c === "true") acertos1++;
  document.getElementById("resultado1").innerText =
  btn.dataset.c === "true" ? "✔ Correto" : "✘ Errado";

  document.getElementById("btnProx1").style.display = "block";
}

function proximaPergunta1(){
  i1++;
  mostrar1();
}

mostrar1();

/* QUIZ 2 */
let i2 = 0, acertos2 = 0;

const p2 = [
{q:"Revolução Industrial começou em?",o:["Inglaterra","Brasil","Índia"],c:0},
{q:"Energia principal?",o:["Carvão","Solar","Eólica"],c:0},
{q:"Trabalho infantil?",o:["Comum","Proibido","Raro"],c:0},
{q:"Produção ficou?",o:["Em massa","Manual","Lenta"],c:0}
];

function mostrar2(){
  if(i2 >= p2.length){
    document.getElementById("pergunta2").innerText = "Fim! Acertos: " + acertos2;
    return;
  }

  let p = p2[i2];
  document.getElementById("pergunta2").innerText = p.q;

  let op = [...p.o].sort(()=>Math.random()-0.5);

  document.querySelectorAll(".respostas2 button").forEach((b,i)=>{
    b.innerText = op[i];
    b.dataset.c = (op[i] == p.o[p.c]);
  });

  document.getElementById("resultado2").innerText = "";
  document.getElementById("btnProx2").style.display = "none";
}

function responder2(btn){
  if(btn.dataset.c === "true") acertos2++;
  document.getElementById("resultado2").innerText =
  btn.dataset.c === "true" ? "✔ Correto" : "✘ Errado";

  document.getElementById("btnProx2").style.display = "block";
}

function proximaPergunta2(){
  i2++;
  mostrar2();
}