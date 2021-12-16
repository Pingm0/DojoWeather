
const myUl =document.querySelector("ul")
myUl.addEventListener('click', () =>  {
    alert("Loading Weather Report")
})


const accButton = document.querySelector(".accept");

accButton.addEventListener('click', () => {
    document.querySelector(".cookie").remove()
})