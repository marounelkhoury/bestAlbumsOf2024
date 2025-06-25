const albums = [
    { title: "Two Star & the Dream Police", artist: "Mk.gee", genre: "Alternative", image: "https://f4.bcbits.com/img/a0163036795_16.jpg", html: "html1.html" },
    { title: "Short n' Sweet", artist: "Sabrina Carpenter", genre: "Pop", image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Short_n%27_Sweet_-_Sabrina_Carpenter.png", html: "html2.html" },
    { title: "The Tortured Poets Department", artist: "Taylor Swift", genre: "Pop", image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Taylor_Swift_%E2%80%93_The_Tortured_Poets_Department_%28album_cover%29.png", html: "html3.html" },
    { title: "The Loneliest Girl in the World", artist: "Laci Kaye Booth", genre: "Country", image: "https://images.genius.com/9ed8f6f6a1bae1b403efe4d7d73cf827.1000x1000x1.png", html: "html4.html" },
    { title: "Nashville, Tennessee", artist: "Ernest", genre: "Country", image: "https://i.scdn.co/image/ab67616d0000b2737c78e926bd13930639b5cac6", html: "html5.html" },
    { title: "Born in the Wild", artist: "Tems", genre: "R&B/Soul", image: "https://upload.wikimedia.org/wikipedia/en/8/87/Tems_-_Born_in_the_Wild_album_cover.jpg", html: "html6.html" },
    { title: "Eternal Sunshine", artist: "Ariana Grande", genre: "Pop", image: "https://upload.wikimedia.org/wikipedia/en/7/7e/Ariana_Grande_-_Eternal_Sunshine.png", html: "html7.html" },
    { title: "The Force", artist: "LL Cool J", genre: "Hip-Hop/Rap", image: "https://upload.wikimedia.org/wikipedia/en/c/cc/LL_Cool_J_-_The_Force.png", html: "html8.html" },
    { title: "Brat", artist: "Charli xcx", genre: "Dance", image: "https://pbs.twimg.com/media/GPmGJhTbcAA6I9C.jpg:large", html: "html9.html" },
    { title: "Hit Me Hard and Soft", artist: "Billie Eilish", genre: "Alternative", image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Billie_Eilish_-_Hit_Me_Hard_and_Soft.png", html: "html10.html" },
    { title: "Cowboy Carter", artist: "Beyoncé", genre: "Country", image: "https://upload.wikimedia.org/wikipedia/en/a/aa/Beyonc%C3%A9_-_Cowboy_Carter.png", html: "html11.html" },
    { title: "One Hand Clapping", artist: "Paul McCartney & Wings", genre: "Rock", image: "https://eu-west-2.graphassets.com/A4WEZhR8eReCuFZel5SMSz/Q1lAwEwQmW30vgm2mCnN", html: "html12.html" },
    { title: "TORI.", artist: "Tori Kelly", genre: "Pop", image: "https://e.snmc.io/i/600/s/a06f87fd16f0e9aae7eeaf3201aed92e/11785551/tori-kelly-tori-Cover-Art.jpg", html: "html13.html" },
    { title: "GNX", artist: "Kendrick Lamar", genre: "Hip-Hop/Rap", image: "https://upload.wikimedia.org/wikipedia/en/9/93/Kendrick_Lamar_-_GNX.png", html: "html14.html" },
    { title: "Imaginal Disk", artist: "Magdalena Bay", genre: "Pop", image: "https://f4.bcbits.com/img/a3108453833_10.jpg", html: "html15.html" },
    { title: "The Great Impersonator", artist: "Halsey", genre: "Alternative", image: "https://upload.wikimedia.org/wikipedia/en/3/37/Halsey_-_The_Great_Impersonator.jpeg", html: "html16.html" },
    { title: "Songs of a Lost World", artist: "The Cure", genre: "Alternative", image: "https://upload.wikimedia.org/wikipedia/en/c/c6/Songs_of_a_Lost_World_the_Cure.jpg", html: "html17.html" },
    { title: "Frog in Boiling Water", artist: "DIIV", genre: "Alternative", image: "https://fantasyrecordings.com/wp-content/uploads/2024/02/DIIV-Frog-in-Boiling-Water-_-Album-Art_3.jpg", html: "html18.html" },
    { title: "Charm", artist: "Clairo", genre: "Alternative", image: "https://preview.redd.it/charm-album-cover-v0-87xgwyc4ic2d1.jpeg?auto=webp&s=e2889cef5349e1bab48ca10aa3f00208c99b2c7e", html: "html19.html" },
    { title: "Hardstone Psycho", artist: "Don Toliver", genre: "Hip-Hop/Rap", image: "https://upload.wikimedia.org/wikipedia/en/2/21/Don_Toliver_-_Hardstone_Psycho.png", html: "html20.html" },
    { title: "The Hard Quartet", artist: "The Hard Quartet", genre: "Alternative", image: "https://f4.bcbits.com/img/a2686125909_16.jpg", html: "html21.html" },
    { title: "Deeper Well", artist: "Kacey Musgraves", genre: "Country", image: "https://cdn-images.dzcdn.net/images/cover/4d20e03624c784951abe555cae7a31a6/0x1900-000000-80-0-0.jpg", html: "html22.html" },
    { title: "Chromakopia", artist: "Tyler, the Creator", genre: "Hip-Hop/Rap", image: "https://upload.wikimedia.org/wikipedia/en/5/5b/Chromakopia_CD_cover.jpg", html: "html23.html" },
    { title: "C, XOXO", artist: "Camila Cabello", genre: "Pop", image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Camila_Cabello_-_C%2CXOXO.png", html: "html24.html" },
    { title: "All Born Screaming", artist: "St. Vincent", genre: "Alternative", image: "https://f4.bcbits.com/img/a0348858771_10.jpg", html: "html25.html" },
    { title: "Bleachers", artist: "Bleachers", genre: "Alternative", image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Bleachers_-_Bleachers.png", html: "html26.html" },
  ];
  
const albumContainer = document.getElementById('album-container');

function displayAlbums(filter = "All") {
  albumContainer.innerHTML = "";
  albums.forEach(album => {
    if (filter === "All" || album.genre === filter) {
      const albumDiv = document.createElement('div');
      albumDiv.classList.add('album', album.genre.toLowerCase());
      albumDiv.innerHTML = `<a href="${album.html}">
        <img src="${album.image}" alt="${album.title}">
        <h3>${album.title}</h3>
        <p>${album.artist}</p>
        <a>`;
      albumContainer.appendChild(albumDiv);
    }
  });
}

document.getElementById('filter-all').addEventListener('click', () => displayAlbums("All"));
document.getElementById('filter-pop').addEventListener('click', () => displayAlbums("Pop"));
document.getElementById('filter-rock').addEventListener('click', () => displayAlbums("Rock"));
document.getElementById('filter-hip-hop/rap').addEventListener('click', () => displayAlbums("Hip-Hop/Rap"));
document.getElementById('filter-alternative').addEventListener('click', () => displayAlbums("Alternative"));
document.getElementById('filter-country').addEventListener('click', () => displayAlbums("Country"));
document.getElementById('filter-r&b/soul').addEventListener('click', () => displayAlbums("R&B/Soul"));
document.getElementById('filter-dance').addEventListener('click', () => displayAlbums("Dance"));

displayAlbums();

const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let index = 0;

function slideShow() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  slides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(slideShow, 3000);