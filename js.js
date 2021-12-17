const temps = {
    c:[24,18,27,19,21,16,26,21],
    f:[75,65,80,66,69,61,78,70]
}
const myUl =document.querySelector("ul")
myUl.addEventListener('click', () =>  {
    alert("Loading Weather Report")
})


const accButton = document.querySelector(".accept");

accButton.addEventListener('click', () => {
    document.querySelector(".cookie").remove()
})

console.log(temps.c[1])

const temp = document.querySelector("#scale").addEventListener('change',(e) => {
const allTemps = document.querySelectorAll(".alltmp")
    console.log(allTemps)    
    if (e.target.value == "C") {
        for (let i = 0 ; i < 8 ; i++) {
            allTemps[i].innerHTML = temps.c[i]
        }
    }
    else {
        for (let i = 0 ; i < 8 ; i++) {
            allTemps[i].innerHTML = temps.f[i]
        }
    }
    

})

