//=== BANCO DE DADOS (JSON Simulado) === 

let post = {
  likecount: 0,
  deslikecount: 0,
  curtido: false,
  descurtido: false
}

//=== SERVICE (regras de negócio) === 

function curtir() {
  if (post.curtido == false){
    post.likeCount++;
    post.curtido = true;

    if(post.descurtido == true){
      post.deslikeCount--;
      post.descurtido = false;
    }

  }else{
    postlikeCount--;
    post.curtido = false;
  }

}

function descurtir() {
  if(post.descurtido == false){
    post.deslikeCount++;
    post.descurtido = true;

    if(post.curtido == true){
      post.likeCount--;
      post.curtido = false;
    }

  }
  else{
    post.deslikeCount--;
    post.descurtido = false;
  }
}

//== API SIMULADO === //

function getPost(){
return post;
}

function likePost(){
  curtir();
return post;
}

function deslikePost(){
  descurtir();
  return post;
}



// === VIEW (interface/renderização)===
function atualizarTela(){
  document.getElementById("likeCount").innerText = likeCount;
  document.getElementById("deslikeCount").innerText = deslikeCount;
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
document.getElementById("deslikeBtn").addEventListener("click", clicarDescurtir);

// === INICIALIZAÇÃO ===  

atualizarTela();