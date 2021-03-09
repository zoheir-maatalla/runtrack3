
const bouton = document.getElementById("button");

function citation() {
    let article = document.getElementById ("citation");
    let texte = article.textContent;
    console.log(texte);
}
bouton.addEventListener("click",citation);