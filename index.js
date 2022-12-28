//audio function
function handleClick(){
    // let audio = new Audio("sounds/kick-bass.mp3");
    audio.play()
}

for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){

        let buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play()
                break;

            case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play()
                break;

            case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play()
                break;

            
        
            default:
                break;
        }

    })

}

