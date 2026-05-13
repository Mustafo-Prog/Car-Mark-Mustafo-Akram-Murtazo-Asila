const scrolling1 = document.getElementById("imgscrolling1")
const scrolling2 = document.getElementById("imgscrolling2")

function next0() {
    document.getElementById("nexus1").style.display = "none"
    document.getElementById("nexus3").style.display = "block"
    document.getElementById("imgscrolling1").style.display = "none"
    document.getElementById("imgscrolling2").style.display = "none"
    document.getElementById("imgscrolling5").style.display = "block"
    document.getElementById("imgscrolling6").style.display = "block"
}

function next1() {
    document.getElementById("nexus1").style.display = "none"
    document.getElementById("nexus2").style.display = "block"
    document.getElementById("imgscrolling1").style.display = "none"
    document.getElementById("imgscrolling2").style.display = "none"
    document.getElementById("imgscrolling3").style.display = "block"
    document.getElementById("imgscrolling4").style.display = "block"
}

function next2() {
    document.getElementById("nexus1").style.display = "block"
    document.getElementById("nexus2").style.display = "none"
    document.getElementById("imgscrolling1").style.display = "block"
    document.getElementById("imgscrolling2").style.display = "block"
    document.getElementById("imgscrolling3").style.display = "none"
    document.getElementById("imgscrolling4").style.display = "none"
}

function next3() {
    document.getElementById("nexus2").style.display = "none"
    document.getElementById("nexus3").style.display = "block"
    document.getElementById("imgscrolling3").style.display = "none"
    document.getElementById("imgscrolling4").style.display = "none"
    document.getElementById("imgscrolling5").style.display = "block"
    document.getElementById("imgscrolling6").style.display = "block"
}

function next4() {
    document.getElementById("nexus2").style.display = "block"
    document.getElementById("nexus3").style.display = "none"
    document.getElementById("imgscrolling3").style.display = "block"
    document.getElementById("imgscrolling4").style.display = "block"
    document.getElementById("imgscrolling5").style.display = "none"
    document.getElementById("imgscrolling6").style.display = "none"
}

function next5() {
    document.getElementById("nexus1").style.display = "block"
    document.getElementById("nexus3").style.display = "none"
    document.getElementById("imgscrolling1").style.display = "block"
    document.getElementById("imgscrolling2").style.display = "block"
    document.getElementById("imgscrolling5").style.display = "none"
    document.getElementById("imgscrolling6").style.display = "none"
}

scrolling2.addEventListener('click', () => {
    next1()
})

function dropdown1() {
    let dropdown1 = document.getElementById("procces-main-dropdown-info")

    if (dropdown1.style.height === "100%") {
        dropdown1.style.height = "0"
        document.getElementById("dropdown-significator").style.transform = "rotate(135deg)"
    } else {
        dropdown1.style.height = "100%"
        document.getElementById("dropdown-significator").style.transform = "rotate(0deg)"
    }
}

function dropdown2() {
    let dropdown2 = document.getElementById("procces-main-dropdown-info1")

    if (dropdown2.style.height === "100%") {
        dropdown2.style.height = "0"
        document.getElementById("dropdown-significator1").style.transform = "rotate(135deg)"
    } else {
        dropdown2.style.height = "100%"
        document.getElementById("dropdown-significator1").style.transform = "rotate(0deg)"
    }
}

function dropdown3() {
    let dropdown3 = document.getElementById("procces-main-dropdown-info2")

    if (dropdown3.style.height === "100%") {
        dropdown3.style.height = "0"
        document.getElementById("dropdown-significator2").style.transform = "rotate(135deg)"
    } else {
        dropdown3.style.height = "100%"
        document.getElementById("dropdown-significator2").style.transform = "rotate(0deg)"
    }
}


window.addEventListener('scroll', () => {
    togglebacktop()
})

function togglebacktop() {
    let backtop = document.getElementById("backtop")

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        backtop.style.bottom = "30px"
    } else {
        backtop.style.bottom = "-100%"
    }
}



function variant0() {
    document.getElementById("variant0").style.display = "none"
    document.getElementById("variant1").style.display = "flex"
    document.getElementById("comscroll1").style.display = "none"
    document.getElementById("comscroll2").style.display = "none"
    document.getElementById("comscroll3").style.display = "block"
    document.getElementById("comscroll4").style.display = "block"
}

function variant1() {
    document.getElementById("variant0").style.display = "flex"
    document.getElementById("variant1").style.display = "none"
    document.getElementById("comscroll1").style.display = "block"
    document.getElementById("comscroll2").style.display = "block"
    document.getElementById("comscroll3").style.display = "none"
    document.getElementById("comscroll4").style.display = "none"
}

function variant2() {
    document.getElementById("variant2").style.display = "flex"
    document.getElementById("variant1").style.display = "none"
    document.getElementById("comscroll5").style.display = "block"
    document.getElementById("comscroll6").style.display = "block"
    document.getElementById("comscroll3").style.display = "none"
    document.getElementById("comscroll4").style.display = "none"
}

function variant3() {
    document.getElementById("variant2").style.display = "none"
    document.getElementById("variant1").style.display = "flex"
    document.getElementById("comscroll5").style.display = "none"
    document.getElementById("comscroll6").style.display = "none"
    document.getElementById("comscroll3").style.display = "block"
    document.getElementById("comscroll4").style.display = "block"
}

function variant4() {
    document.getElementById("variant2").style.display = "flex"
    document.getElementById("variant0").style.display = "none"
    document.getElementById("comscroll5").style.display = "block"
    document.getElementById("comscroll6").style.display = "block"
    document.getElementById("comscroll1").style.display = "none"
    document.getElementById("comscroll2").style.display = "none"
}

function variant5() {
    document.getElementById("variant2").style.display = "none"
    document.getElementById("variant0").style.display = "flex"
    document.getElementById("comscroll5").style.display = "none"
    document.getElementById("comscroll6").style.display = "none"
    document.getElementById("comscroll1").style.display = "block"
    document.getElementById("comscroll2").style.display = "block"
}

function a1(){
    document.querySelector('.navbar__content123').style.top = "-100%"
}

function a2(){
    document.querySelector('.navbar__content123').style.top = "0"
}

document.querySelectorAll(".navbar__center-a123").forEach(link => {
    link.addEventListener('click', () => {
        a1()
    })
})  

let name = prompt("What is your name?")

alert("Welcome " + name)

let old = prompt("How old are you?")

let city = prompt("Where you was born?")

confirm("Are you study in Najot Talim?")

let mith = prompt("Do you like math?")

let year = "2026"

if(mith === "yes"){
    alert("+ part")
    let number1 = prompt("Write down first number!")
    let number2 = prompt("Write down second number!")
    let answwer = (Number(number1) + Number(number2))    
    alert("Answer " + answwer)

    alert("- part")
    let number3 = prompt("Write down first number!")
    let number4 = prompt("Write down second number!")
    let answwer1 = (Number(number3) - Number(number4))    
    alert("Answer " + answwer1)
    
    alert("* part")
    let number5 = prompt("Write down first number!")
    let number6 = prompt("Write down second number!")
    let answwer2 = (Number(number5) * Number(number6))    
    alert("Answer " + answwer2)

    alert("/ part")
    let number7 = prompt("Write down first number!")
    let number8 = prompt("Write down second number!")
    let answwer3 = (Number(number7) / Number(number8))    
    alert("Answer " + answwer3)
}else{
    console.log("User doesn't like math!");
}

let mico = (Number(year) - Number(old))

console.log("User's name is " + name);
console.log("User is " + old + " years old!");
console.log("User was born in " + mico);
console.log("The user was born in " + city)