const form = document.querySelector('#age-form');
const date = document.querySelector('#date');
const time = document.querySelector('#time');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    console.log(date.value);
    console.log(time.value);

});

$("diV#testDiv").load("./content.html .more")

// $("div").text("Test is working").css("font-weight", "bold")
    