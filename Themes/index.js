const icon = document.getElementById("icon");

icon.onclick= () => {
    document.body.classList.toggle("darktheme");
    if(document.body.classList == "darktheme") {
        icon.src = "././Images/sun.png"
    } else {
        icon.src = "././Images/moon.png"
    }
}