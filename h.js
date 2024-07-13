
setTimeout(c, 2000)
function c() {
    document.body.style.backgroundColor = "black";
    setTimeout(c2, 1000)
}
function c2() {
    document.body.style.backgroundColor = "red";
    setTimeout(c3, 1000)
}
function c3() {
    document.body.style.backgroundColor = "grey";
    setTimeout(c4, 1000)
}
function c4() {
    document.body.style.backgroundColor = "blue";
    setTimeout(c5, 1000)
}
function c5() {
    document.body.style.backgroundColor = "green";
    setTimeout(c, 1000)
}