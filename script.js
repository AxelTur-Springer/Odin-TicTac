
const gameBoard = (()=>{
    let box = document.querySelectorAll(".box");
    box.forEach((innerStuff)=>{innerStuff.innerText ="" })
    
    })()

    let positionsOfXAndO = {
            0: "",
            1:"",
            2:"",
            3: "",
            4:"",
            5:"",
            6: "",
            7:"",
            8:""
    }
    const tableTic = document.getElementById("ticTacToeTable")
    let box;
    let squareDivs = document.getElementsByClassName("box")
    let pcOrUserDiv = document.getElementById("fullContainer")
    const CounterOtherChoice = document.getElementById("nameOther")
    
    function changePcClassList(){
     
    resetObjectjeje()
    setplayer()
    resetCounters()
    CounterOtherChoice.innerText = "The Pc"
    tableTic.style.display="flex";
      let alertIngPlayer = document.createElement("div")
      let alertText = document.createElement("p")
        alertText.innerText = "Your are playing against The Pc Bip Boop Bip"
        alertIngPlayer.className= "test";
        alertIngPlayer.appendChild(alertText)
        alertIngPlayer.style.marginTop ="2em"
        alertIngPlayer.style.fontSize ="2em"
        pcOrUserDiv.appendChild(alertIngPlayer)
       
            for(let i = 0 ; i < 9 ; i++){
                squareDivs[i].classList.add("boxPc")
                squareDivs[i].classList.remove("boxUser")
    
            }
            box = document.querySelectorAll(".boxPc");
                box.forEach((boxy)=>{ boxy.addEventListener("click",eventclick)})

        
       
    
    }
    // Important format for viewint what has been pressed 
    // (e). represents the elemnt cliked
   /* box = document.querySelectorAll(".box");

    box.forEach((boxy)=>{ boxy.addEventListener("click",(e)=>{
        console.log(e)
    })})*/

    function changeOtherUserClassList(){
        resetObjectjeje()
        setplayer()
        resetCounters()
        CounterOtherChoice.innerText = "Oponent"
        tableTic.style.display="flex";
        let alertIngPlayer = document.createElement("div")
        let alertText = document.createElement("p")
          alertIngPlayer.className= "test";
          alertText.innerText = "Your are playing against your friend"
          alertIngPlayer.appendChild(alertText)
          alertIngPlayer.style.marginTop ="2em"
          alertIngPlayer.style.fontSize ="2em"
          pcOrUserDiv.appendChild(alertIngPlayer)
        
  
            for(let i = 0 ; i < 9 ; i++){
                squareDivs[i].classList.add("boxUser")
                squareDivs[i].classList.remove("boxPc")
            }
                box = document.querySelectorAll(".boxUser");
                box.forEach((boxy)=>{ boxy.addEventListener("click",eventclick)})
    }
    
    function eventclick(){
         PushingXToObject(this)
    }


    let counterTurn = 1;
    function PushingXToObject(divTouched){

            let IndexPressed = ""
            const parent = document.getElementById('test');
                let child= parent.children
            IndexPressed = [...child].indexOf(divTouched)
            if(positionsOfXAndO[IndexPressed.toString()] === "X" 
            || positionsOfXAndO[IndexPressed.toString()] ==="O")
            { }           
            else{positionsOfXAndO[IndexPressed.toString()] ="X"
            
            if(box[0].className==="box boxPc"){
                pushingOtoObjectPc()
                displayXandOs()
            }else{  // this is the case if your playing against a friend
              if(counterTurn === 0){
                counterTurn = 1
                positionsOfXAndO[IndexPressed.toString()] = "O" 
                displayXandOs()
              }
              else if(counterTurn===1){
                positionsOfXAndO[IndexPressed.toString()] = "X" 
                counterTurn =0;
                displayXandOs()
              }
            }
        }
    }
    
    
    function pushingOtoObjectPc(){

      let arrayValues = Object.values(positionsOfXAndO)
    
      if(arrayValues.includes("")){
        function RandomNum(){
            let randomNum = Math.floor(Math.random() * 9);
            if(positionsOfXAndO[randomNum.toString()] === ""){
                  positionsOfXAndO[randomNum.toString()] = "O"
            }else{RandomNum()}
        }
        RandomNum()
      }
    }
    
    
    
    let arrayValuesTie;
    function displayXandOs(){
        arrayValuesTie =Object.values(positionsOfXAndO)
        .filter((a)=>{return a ===""}).length;
         if(arrayValuesTie === 0){
            displayWinOrLose("tie")
            resetObjectjeje()
         }
        const parent = document.getElementById('test');
        let child= parent.children
        for(let i = 0 ; i < 9; i++){
                child[i].innerHTML=positionsOfXAndO[i.toString()]
    }
    checkWin()
  
    }
    
    
    
    let tie  = [];
    function checkWin(){
        //rows
        let arrayValues = Object.values(positionsOfXAndO);
        let rowArray =[];
        rowArray.push(arrayValues.splice(0,3));
          rowArray.push(arrayValues.splice(0,3));
            rowArray.push(arrayValues.splice(0,3));
        evaluateWin(rowArray)
    
        //columns
        let columnArrayJoin=[];
        let columnArray =[]
        for (let i = 0; i  < 3; i++) {
            columnArrayJoin.push(rowArray[i][0])
        }
        for (let i = 0; i  < 3; i++) {
            columnArrayJoin.push(rowArray[i][1])
        }
        for (let i = 0; i  < 3; i++) {
            columnArrayJoin.push(rowArray[i][2])
        }
        columnArray.push(columnArrayJoin.splice(0,3));
            columnArray.push(columnArrayJoin.splice(0,3));
                columnArray.push(columnArrayJoin.splice(0,3));
        evaluateWin(columnArray)
    
        //diagonals
    let diagonalArray1= [rowArray[0][0],rowArray[1][1],rowArray[2][2]]
    let diagonalArray2= [rowArray[0][2],rowArray[1][1],rowArray[2][0]]
      diagonals(diagonalArray1)
      diagonals(diagonalArray2)
    
    
    };
    
    
    function diagonals(value){
        if(value.includes("")===false && value.includes("O")=== false){
            displayWinOrLose("win")
            resetObjectjeje()
            counter("win")
   
          
     }else if(value.includes("")===false && value.includes("X")===false){
        displayWinOrLose("lose")  
        resetObjectjeje()
        counter("lose")

        }
      
    }
    
    
    function evaluateWin(value){
        for (let i = 0; i  <3; i++) {
            if(value[i].includes("")===false && value[i].includes("O")===false){
                displayWinOrLose("win") 
                counter("win")
                resetObjectjeje()

            }else if(value[i].includes("")===false && value[i].includes("X")===false){
                displayWinOrLose("lose")  
            resetObjectjeje()
             counter("lose")
            }
        }
       
        if(positionsOfXAndO){}
    }

    //html Elements
const counterYouDiv = document.getElementById("CounterYou");
const counterOtherDiv = document.getElementById("CounterOther");
let counterYouNum = 0;
let counterOtherNum = 0;
function counter(winOrLose){
    
    if(winOrLose === "win"){
        counterYouNum +=1
        counterYouDiv.innerText = counterYouNum;
    }else{
        counterOtherNum +=1
        counterOtherDiv.innerText = counterOtherNum;
    }
}
function resetCounters(){
   counterYouNum = 0;
   counterYouDiv.innerText = counterYouNum;
   counterOtherNum =0;
   counterOtherDiv.innerText = counterYouNum;
}

let popUp = document.getElementsByClassName("popUpWinOrLose")

function displayWinOrLose(winOrLose){
    console.log()
    popUp[0].style.display="flex"
    popUp[0].children[0].children[1].innerText="Wins"

    if(winOrLose === "win"){
        popUp[0].children[0].children[0].innerText = "X";
    }else if(winOrLose ==="tie"){
        popUp[0].children[0].children[1].innerText=""
        popUp[0].children[0].children[0].innerText = "Tie"
    }
    else{
        popUp[0].children[0].children[0].innerText = "O"
    }

}

    function resetObjectjeje(){
       counterTurn = 1;
        positionsOfXAndO = {
            0:"",
            1:"",
            2:"",
            3: "",
            4:"",
            5:"",
            6:"",
            7:"",
            8:""
        }   
    displayXandOs()
    setTimeout(DisapearPopUp,1500)
    }

function DisapearPopUp(){
    popUp[0].style.display="none"
}

function setplayer(){
    document.querySelectorAll('.test').forEach(function(a){
        a.remove()
        })
}


