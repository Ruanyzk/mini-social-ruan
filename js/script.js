let likeCount = 0;

function curtir() {
  likeCount++;
  document.getElementById("likeCount").innerText = likeCount;
}

document.getElementById("likeBtn").addEventListener("click", curtir);
