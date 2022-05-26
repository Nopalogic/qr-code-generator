const wrapper = document.querySelector(".wrapper"),
    qrInput = document.querySelector(".form input"),
    generatorBtn = document.querySelector(".form button"),
    qrImg = document.querySelector(".qr-code img");

generatorBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generatorBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data= ${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generatorBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});