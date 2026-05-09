const scrolling1 = document.getElementById("imgscrolling1")
const scrolling2 = document.getElementById("imgscrolling2")

function next0 () {
    document.getElementById("nexus1").style.display = "none"
    document.getElementById("nexus3").style.display = "block"
    document.getElementById("imgscrolling1").style.display = "none"
    document.getElementById("imgscrolling2").style.display = "none"
    document.getElementById("imgscrolling5").style.display = "block"
    document.getElementById("imgscrolling6").style.display = "block"
}

function next1 () {
    document.getElementById("nexus1").style.display = "none"
    document.getElementById("nexus2").style.display = "block"
    document.getElementById("imgscrolling1").style.display = "none"
    document.getElementById("imgscrolling2").style.display = "none"
    document.getElementById("imgscrolling3").style.display = "block"
    document.getElementById("imgscrolling4").style.display = "block"
}

function next2 () {
    document.getElementById("nexus1").style.display = "block"
    document.getElementById("nexus2").style.display = "none"
    document.getElementById("imgscrolling1").style.display = "block"
    document.getElementById("imgscrolling2").style.display = "block"
    document.getElementById("imgscrolling3").style.display = "none"
    document.getElementById("imgscrolling4").style.display = "none"
}

function next3 () {
    document.getElementById("nexus2").style.display = "none"
    document.getElementById("nexus3").style.display = "block"
    document.getElementById("imgscrolling3").style.display = "none"
    document.getElementById("imgscrolling4").style.display = "none"
    document.getElementById("imgscrolling5").style.display = "block"
    document.getElementById("imgscrolling6").style.display = "block"
}

function next4 () {
    document.getElementById("nexus2").style.display = "block"
    document.getElementById("nexus3").style.display = "none"
    document.getElementById("imgscrolling3").style.display = "block"
    document.getElementById("imgscrolling4").style.display = "block"
    document.getElementById("imgscrolling5").style.display = "none"
    document.getElementById("imgscrolling6").style.display = "none"
}

function next5 () {
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

function dropdown1 () {
    let dropdown1 = document.getElementById("procces-main-dropdown-info")

    if(dropdown1.style.height === "100%"){
        dropdown1.style.height = "0"
        document.getElementById("dropdown-significator").style.transform = "rotate(135deg)"
    }else{
        dropdown1.style.height = "100%"
        document.getElementById("dropdown-significator").style.transform = "rotate(0deg)"
    }
}

function dropdown2 () {
    let dropdown2 = document.getElementById("procces-main-dropdown-info1")

    if(dropdown2.style.height === "100%"){
        dropdown2.style.height = "0"
        document.getElementById("dropdown-significator1").style.transform = "rotate(135deg)"
    }else{
        dropdown2.style.height = "100%"
        document.getElementById("dropdown-significator1").style.transform = "rotate(0deg)"
    }
}

function dropdown3 () {
    let dropdown3 = document.getElementById("procces-main-dropdown-info2")

    if(dropdown3.style.height === "100%"){
        dropdown3.style.height = "0"
        document.getElementById("dropdown-significator2").style.transform = "rotate(135deg)"
    }else{
        dropdown3.style.height = "100%"
        document.getElementById("dropdown-significator2").style.transform = "rotate(0deg)"
    }
}