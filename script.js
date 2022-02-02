
var restart=document.getElementById("restart")
restart.style.visibility="hidden";
var character=document.getElementById("character");
var block=document.getElementById("block");
var scoreDiv= document.getElementById("score")
var score=0
function restartGame() {
    window.location.reload();
}

function jump() {
    score ++
    scoreDiv.innerHTML=("Score "+score)
    if (character.classList!="animate" && score<=10) {

    character.classList.add("animate")
    setTimeout(function (){
        character.classList.remove("animate")
    },500)

  }
   else if (score==11) {
        alert("Uspesno preneseni 30 batnasi preku granica!")
        block.style.animation = "none"
        block.style.display = "none"
        restart.style.visibility="visible";
    }

}
if (score=="10") {
    alert("Uspesno preneseni 30 batnasi preku granica!")
    block.style.animation="none"
    block.style.display="none"
}
var checkDead = setInterval(function (){
var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    if(blockLeft<120 && blockLeft>0 && characterTop>=135 && score<10) {
        block.style.animation="none"
        block.style.display="none"
        alert("Uapsen si za vozenje so 320km/h")
        restart.style.visibility="visible";
    }
if (blockLeft<120 && blockLeft>0 && characterTop>=135 && score==10) {
    alert("Uspesno preneseni 30 batnasi preku granica!")
    block.style.animation="none"
    block.style.display="none"
    restart.style.visibility="visible";
    scoreDiv.innerHTML=("Winner Winner Chicken Dinner!!!")
    scoreDiv.style.color="red";
}
},10)
