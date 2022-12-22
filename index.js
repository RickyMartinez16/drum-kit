

function handleClick(){
    alert("clicky click")
}

for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick)
}