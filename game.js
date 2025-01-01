let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");

let turnO = true;
const WinningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO){
            box.InnerText = "O"
            turnO = false;
        }else{
            boxInnerText = "x";
            turnO = true;
        }
        box.disabled = true;
        checkWinner()
    })
  
});

const checkWinner = () =>{
    for( let Pattern of WinningPatterns){
        posVal1 =  boxes[Pattern[0]].innerText;
        posVal2 =  boxes[Pattern[1]].innerText;
        posVal3 =  boxes[Pattern[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 !=""){
       if(posVal1 === posVal2 && posVal2 === posVal3){
             console.log("winner", );
       }
    }
}
};