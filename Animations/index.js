const startBtn = document.getElementById("start-btn");
const parentDiv = document.querySelector(".outer-div");
const toggleOn = document.querySelector(".off");


toggleOn.addEventListener("click", () => {
        toggleOn.classList.add("toggle-on")
})

startBtn.addEventListener("click", ()=>{
    parentDiv.classList.add("blue-animation")
})