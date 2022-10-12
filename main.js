const jokeElm = document.getElementById("joke");
const memeElm = document.getElementById("meme");

async function getJokes() {
    let resp = await fetch("https://icanhazdadjoke.com/slack");
    let data = await resp.json();
    let joke = await data.attachments[0].text;
    jokeElm.innerHTML = joke;
    //console.log(joke);
}

async function getMemes() {
    const randomID = Math.ceil(Math.random() * 250);
    let resp = await fetch(`https://alpha-meme-maker.herokuapp.com/memes/${randomID}/`);
    let dataObj = await resp.json();
    let imgURL = await dataObj.data.image;
    //jokeElm.innerHTML = imgURL;
    memeElm.setAttribute("src", `${imgURL}`);
}

getJokes();
getMemes();