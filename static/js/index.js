let elements = document.querySelectorAll(".elem");

for (let i = 0; i < elements.length; i++) {
    let el = elements[i]
    el.classList.add("greenBg");
    el.addEventListener("click", function(e) {
        el.classList.remove("greenBg");
        el.classList.add("yellowBg");
    })
}

