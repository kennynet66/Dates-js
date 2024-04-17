const x = document.getElementById('demo');

window.onload = ()=> {
    getLocation()
}

const getLocation = () =>{
    console.log("called");
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        x.innerHTML = "Geolocation is not supported by this browser"
    }
}

const showPosition = (position) => {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}