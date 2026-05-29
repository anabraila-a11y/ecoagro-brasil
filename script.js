/* 🌐 SOBRE O SITE */
function toggleSobre(){
  const secao = document.getElementById("sobreSite");

  if(secao.style.display === "block"){
    secao.style.display = "none";
  } else {
    secao.style.display = "block";
  }
}


/* 📦 ABRIR / FECHAR CATEGORIAS */
function toggle(id){
  const el = document.getElementById(id);

  if(el.style.display === "block"){
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}


/* 💬 ABRIR / FECHAR RESPOSTAS */
function toggleResp(id){
  const el = document.getElementById(id);

  if(el.style.display === "block"){
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}
