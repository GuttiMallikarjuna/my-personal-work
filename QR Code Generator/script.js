const container = document.querySelector(".container")
const qrInput = container.querySelector("#text")
const generateBtn = container.querySelector("#generate")
const qrImg = container.querySelector(".qr-code img")

let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) {
        alert('text field is not empty');
        return;
    } else {
        preValue = qrValue;
        generateBtn.innerText = "Generating QR Code...";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
        qrImg.addEventListener("load", () => {
            container.classList.add("active");
            generateBtn.innerText = "Generate QR Code";
        });
    }

});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        container.classList.remove("active");
        preValue = "";
    }
});