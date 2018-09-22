const peeps = [
    {
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747, death: 1797}
    },
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747, death: 1797}
    },
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747, death: 1797}
    },
    title: "Samurai",
    name: "Tomoe Gozen",
    bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
    lifespan: {birth: 1747, death: 1797}
    }
]

function writeToDom(div, string) {
    document.getElementById(div).innerHTML = string;
}

function addToDom(div, string) {
    document.getElementById(div).innerHTML += string;
}

function cardBuilder() {
    let cardString = '';
    let number = 0;
    for(let i = 0; i <peeps.length; i++) {
        number++;
        cardString += `<div id=${number}>`
        cardString +=   `<h3>${peeps[i].title}</h3>`
        cardString +=   `<p>${peeps[i].name}</p>`
        cardString +=   `<p>${peeps[i].bio}</p>`
        cardString +=   `<img href=${peeps[i].image}>`
        cardString +=   `<p>${peeps[i].lifespan.birth} - ${peeps[i].lifespan.death}</p>`
        cardString += `</div>`
    }
    addToDom('mainDiv', cardString);
}