films = [
    { title: "The Matrix", url: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" },
    { title: "Transformers", url: "https://tfwiki.net/mediawiki/images2/thumb/c/c9/DOTM-OPportraitposter.jpg/147px-DOTM-OPportraitposter.jpg" },
    { title: "Interstellar", url: "http://t1.gstatic.com/images?q=tbn:ANd9GcRf61mker2o4KH3CbVE7Zw5B1-VogMH8LfZHEaq3UdCMLxARZAB" },
    { title: "The Transporter", url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Transporterposter.jpg/220px-Transporterposter.jpg" },
    { title: "Inception", url: "http://t2.gstatic.com/images?q=tbn:ANd9GcT3VT-Ynisr-nRV7R65rC8iZ4jyJKgLHU7wvROHYTnc1X7zg_4i" },
    { title: "Iron Man", url: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_.jpg" },
    { title: "Deadpool", url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Deadpool_%282016_poster%29.png/220px-Deadpool_%282016_poster%29.png" },
    { title: "Batman", url: "https://www.dccomics.com/sites/default/files/styles/comics320x485/public/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg?itok=_Or1JrO2" },
    { title: "Spider-Man", url: "http://t0.gstatic.com/images?q=tbn:ANd9GcRPzzfxN6Ugvq902Ut7A-QkCDOqLzzbiYQ2bPk2pn5D9fBZBrT_" },
    { title: "Captain America", url: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/d/d7/CapAmerica-EndgameProfile.jpg/revision/latest/scale-to-width-down/2000?cb=20190423175339" }
];

var leftArrow = document.querySelector(".fa-angle-left");
var rightArrow = document.querySelector(".fa-angle-right");
var filmsImg = document.querySelectorAll("img");
var filmsTitle = document.querySelectorAll("h4");

var count = 0;

for(var i = 0; i < 5; i++) {
    filmsImg[i].src = films[count].url;
    filmsTitle[i].innerHTML = `<h4>${films[count].title}</h4>`;
    count += 1;
}

leftArrow.addEventListener("click", function() {
    if(count-5 <= 0) {
        console.log("LEFT NOT ANOTHER FILM!!!");
    }
    else {
        count -= 6;
        for(var i = 0; i < 5; i++) {
            filmsImg[i].src = films[count].url;
            filmsTitle[i].innerHTML = `<h4>${films[count].title}</h4>`;
            count += 1;
        }
    }
    addOrDelclass();
});

rightArrow.addEventListener("click", function() {
    if(count >= films.length) {
        console.log("RIGHT NOT ANOTHER FILM!!!");
    }
    else {
        count -= 4;
        for(var i = 0; i < 5; i++) {
            filmsImg[i].src = films[count].url;
            filmsTitle[i].innerHTML = `<h4>${films[count].title}</h4>`;
            count += 1;
        }
    }
    addOrDelclass();
});

function addOrDelclass() {
    console.log(count);
    if(count-5 <= 0) {
        leftArrow.classList.add("red-arrow");
    }
    else {
        leftArrow.classList.remove("red-arrow");
    }

    if(count >= films.length) {
        rightArrow.classList.add("red-arrow");
    }
    else {
        rightArrow.classList.remove("red-arrow");
    }
}