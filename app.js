function toMillisecond() {
    let toConvert = document.getElementById("minute").value;
    let milliBtn = document.getElementById("milli");
    let secBtn = document.getElementById("sec");
    let hourBtn = document.getElementById("hour");

    document.getElementById("output").innerHTML = Number(toConvert) * 60000;
    document.getElementById("unit").innerHTML = "Millisecond";

    // Change button style
    milliBtn.classList.toggle("active");
    secBtn.classList.remove("active");
    hourBtn.classList.remove("active");
}
function toSecond() {
    let toConvert = document.getElementById("minute").value;
    let milliBtn = document.getElementById("milli");
    let secBtn = document.getElementById("sec");
    let hourBtn = document.getElementById("hour");

    document.getElementById("output").innerHTML = Number(toConvert) * 60;
    document.getElementById("unit").innerHTML = "Second";

    secBtn.classList.toggle("active");
    milliBtn.classList.remove("active");
    hourBtn.classList.remove("active");
}
function toHour() {
    let toConvert = document.getElementById("minute").value;
    let milliBtn = document.getElementById("milli");
    let secBtn = document.getElementById("sec");
    let hourBtn = document.getElementById("hour");

    document.getElementById("output").innerHTML = Number(toConvert) / 60;
    document.getElementById("unit").innerHTML = "Hour";

    hourBtn.classList.toggle("active");
    secBtn.classList.remove("active");
    milliBtn.classList.remove("active");
}
