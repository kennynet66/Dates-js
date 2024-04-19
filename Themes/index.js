const icon = document.getElementById("icon");
let mode;
let yearSpan = document.querySelector(".year")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

document.getElementById("to-top").addEventListener("click", function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

document.getElementById("work-btn").addEventListener("click", () => {
    const myWorkSection = document.getElementById("mywork");
    myWorkSection.scrollIntoView({behavior: "smooth"});
})



window.onload = () => {
    mode = localStorage.getItem("mode")
    mode = JSON.parse(mode)

    if(mode == "dark") {
        document.body.classList = "darktheme";
        icon.src = "././Images/sun.png";
    } else if(mode == "light") {
        document.body.classList.remove("darktheme");
        icon.src = "././Images/moon.png";
    }

}

icon.onclick= () => {
    let mode = "light";
    if(document.body.classList == "darktheme") {
        setMode("light")
        document.body.classList.toggle("darktheme");
        icon.src = "././Images/moon.png"
    } else {
        setMode("dark")
        document.body.classList.toggle("darktheme");
        icon.src = "././Images/sun.png";
    }
}

const setMode = (mode) => {
    localStorage.setItem("mode", JSON.stringify(mode))
}

const d = new Date;

yearSpan.textContent = d.getFullYear();