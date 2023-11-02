const addBtn = document.querySelector('.add-btn');
const mainContainer = document.querySelector('.main-container');

function createAlbumCard(title, artistName, releaseDate, coverImageURL) {

    let albumCard = document.createElement('div');
    let albumCover = document.createElement('img'); 
    let albumTitle = document.createElement('p');
    let albumArtistName = document.createElement('p');
    let releaseYear = document.createElement('p');

    albumCard.classList.add("album-card");
    albumCover.classList.add("album-cover");
    albumTitle.classList.add("album-title");
    albumArtistName.classList.add("album-artist-name");
    releaseYear.classList.add("album-release-date");

    albumCover.src = coverImageURL;
    albumTitle.innerText = title;
    albumArtistName.innerText = artistName;
    releaseYear.innerText = releaseDate;

    albumCard.appendChild(albumCover);
    albumCard.appendChild(albumTitle);
    albumCard.appendChild(albumArtistName);
    albumCard.appendChild(releaseYear);

    return albumCard;

}

addBtn.addEventListener('click', () => {
    
    let userAlbumData = {
        albumTitle: "Innerspeaker",
        artistName: "Tame Impala", 
        releaseYear: "2010",
        albumCoverURL: "https://m.media-amazon.com/images/I/A1gZc70vUIL._AC_UF1000,1000_QL80_.jpg"
    };

    let albumCard = createAlbumCard(userAlbumData.albumTitle, userAlbumData.artistName, userAlbumData.releaseYear, userAlbumData.albumCoverURL);

    mainContainer.appendChild(albumCard);
    
})


