// model
let age;
let personName;

// view
updateView();
function updateView() {
    let ageTxt = age ? `du blir ${age} år i år!` : "Fyll ut alder.";
    let nameTxt = personName ? `Hei ${personName}, ` : "Fyll ut navn. ";
    document.getElementById('app').innerHTML = /*html*/`
        <h1>Get my age</h1>
        <p>Year of birth:</p>
        <input 
            type="text" 
            oninput="age = getAge(parseInt(this.value))">
        <br>
        <p>Name:</p>
        <input 
            type="text" 
            oninput="personName = this.value">
        <hr>
        <button onclick="updateView();">Trykk her</button>
        <hr>
        ${nameTxt}${ageTxt}
    `
}

// controller
function getAge(yearOfBirth) {
    let todaysDate = new Date();
    let year = todaysDate.getFullYear();
    let age = year - yearOfBirth;
    return age;
}