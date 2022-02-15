let computerNum=0;
let userinput = document.getElementById("InputBox")
let Gobutton = document.getElementById("Gobutton")
let Result = document.getElementById("Result")
let Chances = document.getElementById("chances")
let Resetbutton = document.getElementById("Resetbutton")
let history = []

let Chance = 5;
let gameOver = false
Gobutton.addEventListener("click",play)
Resetbutton.addEventListener("click",Reset)
userinput.addEventListener("focus",function(){userinput.value=""})

function Random(){
    computerNum = Math.floor(Math.random()*100+1)
    console.log(computerNum)
}

function play(){
    let userinput = InputBox.value
    if(userinput>100 || userinput<0){
        Result.textContent = "범위 밖에 수 입니다. 다른 수를 입력하세요"
        return
    }

    if(history.includes(userinput)){
        Result.textContent = "중복된 수 입니다. 다른 수를 입력하세요"
        return
    }
    Chance -- ;

    Chances.textContent = `남은 기회는 ${Chance}입니다.`

    if(userinput>computerNum){
        Result.textContent = "DOWN"
    } else if(userinput<computerNum){
        Result.textContent = "UP"
    } else{
        Result.textContent = "정답입니다"
    }
    history.push(userinput)
    console.log(history)
    if(Chance<1){
        gameOver=true
    }if(gameOver==true){
        Gobutton.disabled = true
    }
}


function Reset(){
    Random()
    Chance = 5
    gameOver = false
    Gobutton.disabled = false
    Chances.textContent = "남은 기회는?"
}
Random()