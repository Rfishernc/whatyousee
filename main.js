let peeps = [
    {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747, death: 1797}
    },
    {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747, death: 1797}
    },
    {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747, death: 1797}
    },
    {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747, death: 1797}
    }
]

let counter = 0;
let counterString = '';
let element;
let val;

function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

function addToDom(div, string) {
    document.getElementById(div).innerHTML += string;
}

function cardBuilder() {
    let cardString = '';
    for(let i = 0; i <peeps.length; i++) {
        counterString = ''+counter;
        counter++;
        cardString += `<div id='${counterString}'>`
        cardString +=   `<h3 id='title${i}' class='title'>${peeps[i].title}</h3>`
        cardString +=   `<p id='name${i}' class='name'>${peeps[i].name}</p>`
        cardString +=   `<p id='bio${i}' class='bio'>${peeps[i].bio}</p>`
        cardString +=   `<img id='image${i}' href=${peeps[i].image} class='image'>`
        cardString +=   `<p id='lifespan${i}' class='lifespan'>${peeps[i].lifespan.birth} - ${peeps[i].lifespan.death}</p>`
        cardString += `</div>`;      
    }
    addToDom('mainDiv', cardString);
    classAssigner();
}

function classAssigner() {
    for(let i = 0; i < peeps.length; i++) {
        let num = document.getElementById(''+i).id;
        if( (num % 2) === 0) {
            document.getElementById(''+i).className = 'even';
        }
        else {
            document.getElementById(''+i).className = 'odd';
        }
    }
}

function getValue() {
    val = document.getElementById('input').value;
    return val;
}

function clickedElement() {
    document.getElementById('mainDiv').addEventListener('click', function() {
        element = event.target;
        if(element.parentNode.classList.contains('even')) {
            element.style.border = '1px black dotted';
            document.getElementById('input').focus();
    }
        else if(element.parentNode.classList.contains('odd')) {
            element.style.border = '1px black dotted';
            document.getElementById('input').focus();
    }
    })
}

function updateElement() {
    document.getElementById('mainDiv').addEventListener('click', function() {
        element = event.target;
        let idIndex = element.id.replace(element.className, '');
        if(element.parentNode.classList.contains('even')) {
            document.getElementById('input').addEventListener('keyup', function() {
                getValue();
                peeps[idIndex][element.className] = val;
                element.innerHTML = peeps[idIndex][element.className];
            })
        }
        else if(element.parentNode.classList.contains('odd')) {
            document.getElementById('input').addEventListener('keyup', function() {
                getValue();
                peeps[idIndex][element.className] = val;
                element.innerHTML = peeps[idIndex][element.className];
           })
        }
    })
}

function pressedEnter() {
    document.getElementById('form').addEventListener('submit', function() {
        event.preventDefault();
        document.getElementById('input').value = '';
    })
}

cardBuilder();
clickedElement();
updateElement();
pressedEnter();