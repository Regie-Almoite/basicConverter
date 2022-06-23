function toMillisecond() {
    let toConvert = document.getElementById("minute").value;
    document.getElementById("output").innerHTML = Number(toConvert) * 60000;
    document.getElementById("unit").innerHTML = "Millisecond";
    document.getElementById("milli").style.animation =
        "buttonAnim 0.25s ease forwards";
    document.getElementById("sec").style.animation = "none";
    document.getElementById("hour").style.animation = "none";
}
function toSecond() {
    let toConvert = document.getElementById("minute").value;
    document.getElementById("output").innerHTML = Number(toConvert) * 60;
    document.getElementById("unit").innerHTML = "Second";
    document.getElementById("sec").style.animation =
        "buttonAnim 0.25s ease forwards";
    document.getElementById("milli").style.animation = "none";
    document.getElementById("hour").style.animation = "none";
}
function toHour() {
    let toConvert = document.getElementById("minute").value;
    document.getElementById("output").innerHTML = Number(toConvert) / 60;
    document.getElementById("unit").innerHTML = "Hour";
    document.getElementById("hour").style.animation =
        "buttonAnim 0.25s ease forwards";
    document.getElementById("milli").style.animation = "none";
    document.getElementById("sec").style.animation = "none";
}
