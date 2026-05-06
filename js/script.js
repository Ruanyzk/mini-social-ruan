//=== ESTADO (dados da aplicação) === 

let likeCount = 0;
let dislikeCount = 0;
let curtido = false;
let descurtido = false;

//=== SERVICE (regras de negócio) === 

function curtir() {
  if (curtido == false){
    likeCount++;
    curtido = true;

    if(descurtido == true){
      dislikeCount--;
      descurtido = false;
    }

  }else{
    likeCount--;
    curtido = false;
  }

}

function descurtir() {
  if(descurtido == false){
    dislikeCount++;
    descurtido = true;

    if(curtido == true){
      likeCount--;
      curtido = false;
    }

  }
  else{
    dislikeCount--;
    descurtido = false;
  }
}

// === VIEW (interface/renderização)===
function atualizarTela(){
  document.getElementById("likeCount").innerText = likeCount;
  document.getElementById("dislikeCount").innerText = dislikeCount;
}

//=== CONTROLLER (intermediação)===

function clicarCurtir(){
  curtir();
  atualizarTela();
}
function clicarDescurtir(){
  descurtir();
  atualizarTela();
}

// === EVENTOS ===

document.getElementById("likeBtn").addEventListener("click", clicarCurtir);
document.getElementById("dislikeBtn").addEventListener("click", clicarDescurtir);

// === INICIALIZAÇÃO ===  

atualizarTela();