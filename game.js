let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-");
let msg = document.querySelector("#msg");
let turnO = true;

const WinPatern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
     msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
     if(turnO===true){
         box.innerText =  "O";
         turnO = false;
     }else{
        box.innerText = "X";
        turnO = true;
     }
     box.disabled = true;

     checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes){
     box.disabled = true;
    } 
};

const enableBoxes = () => {
    for(let box of boxes){
     box.disabled = false;
     box.innerText = "";
    } 
};

const showWinner = (Winner) => {
    msg.innerText = `Conguratulations , Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
     for(let pattern of WinPatern){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                        // console.log("Winner",pos1Val);
                        showWinner(pos1Val);
                }
            }
     }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);