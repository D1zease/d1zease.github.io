const typeWriterTarget = document.querySelector(".content-title")
const text = typeWriterTarget.innerHTML

typeWriterTarget.textContent = ""

function textTypingEffect(element, text, i = 0) {

    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(typeWriterTarget, text, i + 1), 50)

    
}

textTypingEffect(typeWriterTarget, text)