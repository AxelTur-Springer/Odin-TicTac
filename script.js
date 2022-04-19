
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

    let box;
    let squareDivs = document.getElementsByClassName("box")
    let pcOrUserDiv = document.getElementById("fullContainer")
    
    function changePcClassList(){
    resetObjectjeje()
      
      let alertIngPlayer = document.createElement("div")
      let alertText = document.createElement("p")
        alertText.innerText = "Your are playing against The Pc Bip Boop Bip"
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

    function changeOtherUserClassList(){
        resetObjectjeje()

        let alertIngPlayer = document.createElement("div")
        let alertText = document.createElement("p")
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
    
    
    
    
    function displayXandOs(){
        const parent = document.getElementById('test');
        let child= parent.children
        for(let i = 0 ; i < 9; i++){
                child[i].innerHTML=positionsOfXAndO[i.toString()]
    }
    checkWin()

    }
    
    
    
    
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
                resetObjectjeje()
                return alert("win")

   
          
     }else if(value.includes("")===false && value.includes("X")===false){
                resetObjectjeje()
                return alert("you lose")

        }
    }
    
    
    function evaluateWin(value){
        for (let i = 0; i  <3; i++) {
            if(value[i].includes("")===false && value[i].includes("O")===false){
                 resetObjectjeje()
                 return alert("win")

            }else if(value[i].includes("")===false && value[i].includes("X")===false){
             resetObjectjeje()
             return alert("you lose")
            }
        }
    }
    
    
    function displayWinOrLose(winOrLose){

    }
    function resetObjectjeje(){
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
    }



function counterYouNum(){

}
//html Elements
let counterYouDiv = document.getElementById("CounterYou");
let counterOtherDiv = document.getElementById("CounterOther");
