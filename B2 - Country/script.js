function showCapital(){
    var country = document.getElementById('country').value;
    var capital = document.getElementById('capital');
    switch (country) {
        case "India":
            capital.innerText = "delhi";
            break;
        case "UAE":
            capital.innerText = "Abu Dhabi";
            break;
        case "Sri Lanka":
            capital.innerText = "Colombo";
            break;
        case "France":
            capital.innerText = "Paris";
            break;
        case "Malasyia":
            capital.innerText = "Kuala Lumpur";
            break;
        default:
            capital.innerText = "";
    }
}