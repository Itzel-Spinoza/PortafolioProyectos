document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });