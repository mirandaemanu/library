const addBtn = document.querySelector('.add-btn');
const mainContainer = document.querySelector('.main-container');
const modalMenu = document.querySelector('.modal-menu');
const modalSubmit = document.querySelector('.modal-submit');
const delBtn = document.querySelector('.del-btn');


function createAlbumCard(title, artistName, releaseDate, coverImageURL) {

    let albumCard = document.createElement('div');
    let albumCardText = document.createElement('div');
    let albumCover = document.createElement('img'); 
    let albumTitle = document.createElement('p');
    let albumArtistName = document.createElement('p');
    let releaseYear = document.createElement('p');
    let deleteButton = document.createElement('div');
    let deleteButtonIcon = document.createElement('img');

    albumCard.classList.add("album-card");
    albumCover.classList.add("album-cover");
    albumTitle.classList.add("album-title");
    albumArtistName.classList.add("album-artist-name");
    releaseYear.classList.add("album-release-date");
    albumCardText.classList.add("card-text");
    deleteButton.classList.add("del-btn");
    
    

    if(title.length > 20) {
        albumTitle.style.setProperty("font-size", "10px");
        albumArtistName.style.setProperty("font-size", "10px");
        releaseYear.style.setProperty("font-size", "10px");
    }

    albumCover.addEventListener("error", (e) => {
         e.target.src = "https://oakforest.management/wp-content/themes/realestate-7/images/no-image.png";
         e.onerror = null;
    })

    deleteButton.addEventListener("click", (e) => {
        e.target.parentNode.remove();
    })

    albumCover.src = coverImageURL;
    albumTitle.innerText = title;
    albumArtistName.innerText = artistName;
    releaseYear.innerText = releaseDate;

    
    albumCardText.appendChild(albumTitle);
    albumCardText.appendChild(albumArtistName);
    albumCardText.appendChild(releaseYear);
    albumCard.appendChild(deleteButton);
    albumCard.appendChild(albumCover);
    albumCard.appendChild(albumCardText);

    return albumCard;

}

function modalMenuReset() {
    let userReleaseYearInput = document.querySelector('#modal-release-year');
    let errorMessage = document.querySelector('.error-message');
    let userAlbumTitleInput = document.querySelector('#modal-album-name');
    let userArtistNameInput = document.querySelector('#modal-artist-name');

    document.querySelector('.modal-form').reset();
    modalMenu.close();
    errorMessage.textContent = '';
    userReleaseYearInput.style.setProperty('border', '1px solid grey');
    userAlbumTitleInput.style.setProperty('border', '1px solid grey');
    userAlbumTitleInput.placeholder = "";
    
    userArtistNameInput.style.setProperty('border', '1px solid grey');
    userArtistNameInput.placeholder = "";
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

    console.log(userAlbumTitleInput.value);
    
    if((userReleaseYearInput.value > currentYear || userReleaseYearInput.value < 1) || userAlbumTitleInput.value == "" || userArtistNameInput.value == "" ) {

        if(userReleaseYearInput.value > currentYear || userReleaseYearInput.value < 1) {
            userReleaseYearInput.style.setProperty('border', '1px solid red');
            
            errorMessage.innerText = (userReleaseYearInput.value > 0) ? "*Release year can't be greater than current year":"*Can't use negative numbers here..";
            document.querySelector('.year-label').appendChild(errorMessage);
        }
    
        if(userAlbumTitleInput.value == "") {
            userAlbumTitleInput.style.setProperty("border", "1px solid red");
            userAlbumTitleInput.placeholder = "Album title is required!";
        }
    
    
        if(userArtistNameInput.value == "") {
            userArtistNameInput.style.setProperty("border", "1px solid red");
            userArtistNameInput.placeholder = "Artist name is required!";
        }

        return;
    }

    if(!/^\d+$/.test(userReleaseYearInput.value)) {
        userReleaseYearInput.style.setProperty('border', '1px solid red');
        errorMessage.textContent = "*Release year should be an INTEGER number";
        return;
    }

   

    let albumCard = createAlbumCard(userAlbumData.albumTitle, userAlbumData.artistName, userAlbumData.releaseYear, userAlbumData.albumCoverURL);
    mainContainer.appendChild(albumCard);

    modalMenuReset();
})



delBtn.addEventListener('click', (e) => {
    e.target.parentNode.remove();
})

