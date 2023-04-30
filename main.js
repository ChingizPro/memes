const generateMemeButton = document.querySelector('.generate');
const memeTitle = document.querySelector('.title');
const memePic = document.querySelector('.pic');
const memeAuthor = document.querySelector('.author');

function changeDetails(url, title, author){
    memePic.src = url;
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

function generateMeme(){
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
        changeDetails(data.url, data.title, data.author);
    });
};

generateMeme();
generateMemeButton.addEventListener('click', generateMeme);