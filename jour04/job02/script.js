
function jsonValueKey(json, key) {
    let monJson = JSON.parse(json);
    return monJson[key];
}
console.log(jsonValueKey("{\"name\": \"La Plateforme_\", \"adress\": \"8 rue d'Hozier\", \"city\": \"Marseille\", \"nb_staff\": \"11\", \"creation\": \"2019\"}", "city"))