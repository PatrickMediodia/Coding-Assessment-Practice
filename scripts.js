$(function(){
    $(".navbar").load("/components/navbar.html");
});

$(function(){
    $(".footer").load("/components/footer.html");
});

document.getElementById("login").onclick = function() {
  document.getElementById("result").innerHTML = "Correct password";
};