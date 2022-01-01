function userAdd(){
    player1_name=document.getElementById("i1").value;
    player2_name=document.getElementById("i2").value;
    localStorage.setItem("player1",player1_name);
    localStorage.setItem("player2",player2_name);
    window.location="index2.html";
}