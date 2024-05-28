// Sample data for trending, funny, and cute memes
const trendingMemes = [
    "https://api.memegen.link/images/buzz/memes/memes_everywhere.webp",
    "https://th.bing.com/th/id/OIP.MDftEWFG1NOtztoQs_ZxfgHaHa?rs=1&pid=ImgDetMain",
    "https://www.boredpanda.com/blog/wp-content/uploads/2021/09/4-6155adeea8fe1__700.jpg",
    // Add more trending memes
];

const funnyMemes = [
    "https://img.izismile.com/img/img11/20180915/640/girly_memes_that_will_change_in_a_few_seconds_640_13.jpg",
    "https://th.bing.com/th/id/OIP.GuEXQXr1HM1lsoPH_oo4pgHaHa?rs=1&pid=ImgDetMain",
    "https://sayingimages.com/wp-content/uploads/when-i-get-engineering-memes.jpg",
    // Add more funny memes
];

const cuteMemes = [
    "https://sayingimages.com/wp-content/uploads/i-didnt-choose-engineering-memes.jpg",
    "https://pleated-jeans.com/wp-content/uploads/2023/11/mental-health-memes-heal-through-laughter-10-354x365.jpg",
    "https://dudememes.com/wp-content/uploads/2019/12/19-Hilarious-Memes-Marvel-5-300x282.jpg",
    // Add more cute memes
];

function getRandomMeme(category) {
    const memeContainer = document.getElementById(`${category}-memes`);
    const memeList = eval(`${category}Memes`);
    const randomIndex = Math.floor(Math.random() * memeList.length);
    const randomMeme = memeList[randomIndex];
    memeContainer.innerHTML = `<img src="${randomMeme}" alt="Random Meme">`;
}

function uploadMeme() {
    const fileInput = document.getElementById('file-input');
    const memeContainer = document.getElementById('uploaded-memes');
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;
        memeContainer.innerHTML = `<img src="${imageUrl}" alt="Uploaded Meme">`;
    };
    reader.readAsDataURL(file);
}
