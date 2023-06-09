
const screen = document.querySelector(".screen"),
equalBtn = document.querySelector(".equal-btns"),
clearbtn = document.querySelector(".clear-btns");

let buttonLnght = document.querySelectorAll(".btns").length;

for (var i = 0; i < buttonLnght; i++){
    document.querySelectorAll(".btns")[i].addEventListener("click", (e)=>{
        let value = e.target.dataset.numb;
        screen.value += value;
        
        });

        equalBtn.addEventListener("click", (e)=> {
            if(screen.value === ""){
                screen.value = "Input a Number";
            }else{
                let answer = eval(screen.value);
                screen.value = answer
            }
        });
clearbtn.addEventListener("click", function(){
 screen.value = '';
})
}

document.addEventListener("keypress", function(e){
    
})