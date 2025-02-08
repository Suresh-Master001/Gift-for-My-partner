
// Background Music Control
window.onload = function() {
    const music = document.getElementById("bg-music");
    setTimeout(() => music.play(), 30000);
};

// Virtual Gift Reveal
function revealGift() {
    document.getElementById("gift-message").classList.remove("hidden");
}

let plaintextAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let ciphertextAlphabet = "SHIZUKAPONDTYVBXCWERFQGMJL";

// Decrypt Function
function decryptMessage() {
    let text = document.getElementById("userMessage").value.toUpperCase();
    let decryptedText = text.split('').map(char => {
        let index = ciphertextAlphabet.indexOf(char);
            return index !== -1 ? plaintextAlphabet[(index-3)%26] : char;
    }).join('');
    if (prompt("Enter Password: ")=="chellam"){
        document.getElementById("gift-messages").classList.remove("hidden");
        document.getElementById("result").value = decryptedText;
    }else{
        alert("Incorrect Password!")
    }
}
