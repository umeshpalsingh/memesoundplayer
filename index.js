var getButton = document.querySelectorAll(".drum");
// console.log(getButton);

for(let i = 0; i < getButton.length; i++) {
    getButton[i].addEventListener("click", function() {
        let button = this.textContent;
        // console.log(button);
        makeSound(button);
        animateButton(button);
    });
}

document.addEventListener("keypress", function(event) {
    let keyPressed = event.key;
    console.log(keyPressed);
    makeSound(keyPressed);
    animateButton(keyPressed);
})

function makeSound(key) {

    var tom1 = new Audio("sounds/ahh.mp3");
    var tom2 = new Audio("sounds/fart.mp3");
    var tom3 = new Audio("sounds/pakad.mp3");
    var tom4 = new Audio("sounds/gadbad.mp3");
    var crash = new Audio("sounds/garam.mp3");
    var kick = new Audio("sounds/ahh.mp3");
    var snare = new Audio("sounds/yele.mp3");

    switch (key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            crash.play();
            break;
        case "k":
            kick.play();
            break;
        case "l":
            snare.play();
            break;
        default: alert("error");
            break;
    }
}

function animateButton(currentkey) {
    var activeButton = document.querySelector(`.${currentkey}`);

    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 200);

}


// if (button === "w") {
//     tom1.play();
// } else if (button === "a") {
//     tom2.play();
// } else if (button === "s") {
//     tom3.play();
// } else if (button === "d") {
//     tom4.play();
// } else if (button === "j") {
//     crash.play();
// } else if (button === "k") {
//     kick.play();
// } else if (button === "l") {
//     snare.play();
// }

// function Employee(name, age, experience, role) {
//     this.name = name
//     this.age = age
//     this.experience = experience
//     this.role = role
//     this.clean = function() {
//         alert("Cleaning in progress");
//     }
// }

// var employee1 = new Employee("yash", 24, 3, "Backend Developer");

// console.log(employee1.clean);
