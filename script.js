const addBtn = document.querySelector('.add-btn');
const mainContainer = document.querySelector('.main-container');
const modalMenu = document.querySelector('.modal-menu');
const modalSubmit = document.querySelector('.modal-submit');

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

function modalMenuReset() {
    let userReleaseYearInput = document.querySelector('#modal-release-year');
    let errorMessage = document.querySelector('.error-message');

    document.querySelector('.modal-form').reset();
    modalMenu.close();
    errorMessage.textContent = '';
    userReleaseYearInput.style.setProperty('border', '1px solid grey');

}

addBtn.addEventListener('click', () => {
    modalMenu.showModal();
})

modalSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let userAlbumTitleInput = document.querySelector('#modal-album-name');
    let userArtistNameInput = document.querySelector('#modal-artist-name');
    let userReleaseYearInput = document.querySelector('#modal-release-year');
    let userAlbumCoverURL = document.querySelector('#modal-album-cover');
    let currentYear = new Date().getFullYear();
    let errorMessage = document.querySelector('.error-message');
 
    let userAlbumData = {
        albumTitle: userAlbumTitleInput.value,
        artistName: userArtistNameInput.value, 
        releaseYear: userReleaseYearInput.value,
        albumCoverURL: userAlbumCoverURL.value
    };

    

    if(userReleaseYearInput.value > currentYear || userReleaseYearInput.value < 1) {
        userReleaseYearInput.style.setProperty('border', '1px solid red');
        
        errorMessage.innerText = (userReleaseYearInput.value > 0) ? "*Release year can't be greater than current year":"*Can't use negative numbers here..";
        document.querySelector('.year-label').appendChild(errorMessage);
        return;
    }

    let albumCard = createAlbumCard(userAlbumData.albumTitle, userAlbumData.artistName, userAlbumData.releaseYear, userAlbumData.albumCoverURL);
    mainContainer.appendChild(albumCard);

    modalMenuReset();

   

})


