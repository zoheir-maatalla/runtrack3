let button = document.getElementById("button");

function showhide() {
    let articletext = document.getElementsByTagName("article");
    if (!articletext[0]) {
        const article = document.createElement("article");
        let texte = "L'important n'est pas la chute, mais l'atterrissage";
        article.innerHTML = `${texte}`;
        document.body.appendChild(article);
    }
    else {
        document.body.removeChild(articletext[0]);
    }
}