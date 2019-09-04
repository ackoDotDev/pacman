let lifeCicleVar;

let vertical = false;
let horisontal = false;

let verticalDirction = 0;
let horisontalDirection = 0;

let speed = 8;

$(document).ready(function(){
    play();
    stop();
});


/** Function that renders display every 50ms */
function lifeCicle() { 
    
    lifeCicleVar = setInterval(function(){ 
        if(horisontal){
            let leftOfset = $(".player")[0].offsetLeft + horisontalDirection * speed;

            if(leftOfset < 3){
                leftOfset = 3;
            } else if(leftOfset > 371){
                leftOfset = 371;
            }

            if(horisontalDirection == 1){
                $(".player").css("transform", "rotate(0deg)");
            } else {
                $(".player").css("transform", "rotate(180deg)");
            }

            $(".player").css("left", leftOfset + "px")  
        }else if(vertical){
            let topOfset = $(".player")[0].offsetTop + verticalDirction * speed;

            if(topOfset < 3){
                topOfset = 3;
            } else if(topOfset> 576){
                topOfset = 576;
            }

            if(verticalDirction == 1){
                $(".player").css("-webkit-transform", "rotate(90deg)");
            } else {
                $(".player").css("-webkit-transform", "rotate(270deg)");
            }

            $(".player").css("top", topOfset + "px")  
        }

     }, 50);

     playerMovment();
};

/** Function that sets focus on input field in order to register key press event*/
function play() {
    $(".play").on("click", function(event){
        console.log("playable")
        $(".player-controle").focus();
        lifeCicle();
    });
}

/** Function that register that input file is lost focus and pauses the game */
function stop() {
    $(".player-controle").on("focusout", function(){
        clearInterval(lifeCicleVar);
    });
}

/** Function that is used to set player movment direction */
function playerMovment() {
    $(".player-controle").on("keypress", function(event){
        console.log("key is pressed");
        $(this).val("");
        switch(event.originalEvent.key){
            case "a":
                horisontalDirection = -1;
                horisontal = true;
                vertical = false;
                break;
            case "d":
                horisontalDirection = 1;
                horisontal = true;
                vertical = false;
                break;
            case "w":
                verticalDirction = -1;
                vertical = true;
                horisontal = false;
                break;
            case "s":
                verticalDirction = 1;
                vertical = true;
                horisontal = false;
                break;
            default:
                break;
        }
    });
}