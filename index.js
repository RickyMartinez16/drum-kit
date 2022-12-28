//audio function
function handleClick(){
    let audio = new Audio("sounds/kick-bass.mp3");
    audio.play()
}

for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick)

    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case "w":
        let audio = new Audio("sounds/crash.mp3");
        audio.play()
            break;
    
        default:
            break;
    }
}

