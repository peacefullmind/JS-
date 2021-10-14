function showAlert() {
    alert("hey function");
}

function showAlert2(event) {
    alert("222222");
    alert(`坐标是: ${event.clientX} and ${event.clientY}`);
    console.log(event);
}
let btn = document.getElementById("myButton");
// btn.onclick = showAlert;
btn.addEventListener('click', showAlert);
btn.addEventListener('click', showAlert2);
btn.removeEventListener('click', showAlert)