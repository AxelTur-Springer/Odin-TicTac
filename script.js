
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


let winningPositions = [

]






function PushingXToObject(){
    let box = document.querySelectorAll(".box");
    box.forEach((boxy)=>{ boxy.addEventListener("click", 
    ()=> {
        let IndexPressed = "";
        const parent = document.getElementById('test');
        let child= parent.children
        IndexPressed = [...child].indexOf(boxy)
        if(positionsOfXAndO[IndexPressed.toString()] === "X" || positionsOfXAndO[IndexPressed.toString()] ==="O")
        {}
        else{positionsOfXAndO[IndexPressed.toString()] ="X"
        pushingOtoObject()
        displayXandOs()
        checkWin()


    }

     });})

}
PushingXToObject()


function pushingOtoObject(){
  
  let arrayValues = Object.values(positionsOfXAndO)
  //console.log(arrayValues)
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
        if(positionsOfXAndO[i.toString()]!== ""){
            child[i].innerHTML=positionsOfXAndO[i.toString()]
        }

}


}



displayXandOs()




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
    console.log(value)
    if(value.includes("")===false && value.includes("O")=== false){
        return alert("win")
 }else if(value.includes("")===false && value.includes("X")===false){
     return alert("you lose")
}

}

function evaluateWin(value){
    console.log(value)
    for (let i = 0; i  <3; i++) {
        if(value[i].includes("")===false && value[i].includes("O")===false){
           return alert("win")
    }else if(value[i].includes("")===false && value[i].includes("X")===false){
        return alert("you lose")
    }
    }


}






