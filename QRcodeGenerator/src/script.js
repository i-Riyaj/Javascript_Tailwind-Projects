
const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=";

const inputBox = document.querySelector('#inputBox');
const QRimage = document.querySelector('#QRimage')

const generateQR = async (url) => {
    if(inputBox.value !== ""){
        QRimage.src = `${apiUrl}${inputBox.value}`;
        QRimage.classList.add('showQR');
    } else {
        if(QRimage.className !== "showQR"){

            QRimage.classList.remove('showQR');
        }
        inputBox.classList.add("errorAnimation");
        setTimeout( () => {
            inputBox.classList.remove("errorAnimation");
        }, 1000 )
    }
}