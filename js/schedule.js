const schedfinder = document.getElementById("schedfinder")
const availability_indicator = document.getElementById("availability-indicator")

schedfinder.addEventListener("click", (e) => {
    availability_indicator.classList.remove("hidden")
    if (getSched()){
        availability_indicator.innerHTML = "<strong>I am!</strong> Feel free to contact me!"
    } else {
        availability_indicator.innerHTML = "<strong style='color:red;'>I am not!</strong> Feel free to contact me still, I will read your message regardless."
    }
})

let today = new Date();
function mobile_support(){
    if (window.innerWidth > 1000) return;
    let selector = "." + today.toLocaleDateString('en-US', {
        weekday: 'long'
    }).toLowerCase()

    let table_elements = document.querySelectorAll(selector)
    table_elements.forEach((element) => {
        element.classList.remove(selector)
        element.style.display = 'block'
    })

    let title_heading = document.getElementById("title-heading")
    title_heading.innerHTML = "Cedric's Schedule for Today!";
}

mobile_support()

window.addEventListener("resize", mobile_support)

function getSched(){

    let date = today.getDay()
    let time = today.getHours()

    if (date === 0 || date === 4) return true;
    else {
        if (date === 6 && time >= 11) return true;
        if (time >= 6 && time < 18) return false; //7-7 unavailable
        return true;
    }
}