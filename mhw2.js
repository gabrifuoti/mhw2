//tasto fullscreen in basso a destra
function fullScreen() {
  if (page.requestFullscreen) {
    page.requestFullscreen();
  } 
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

//mostra più playlist o nuove canzoni uscite
function showAll(event){
    let div = event.target.id;
    let page_block = document.querySelector('.homepage-to-hidden');
    page_block.classList.add('hidden');
    
    if(div=="showall1"){
        let madeforyou_hidden = document.querySelector("#hidden1");  
        madeforyou_hidden.classList.remove('hidden');
    }
    if(div=="showall2"){    
        let releases_hidden = document.querySelector("#hidden2");
        releases_hidden.classList.remove('hidden');
    }
}    

function getBack(){
    let madeforyou_hidden = document.querySelector("#hidden1");
    let releases_hidden = document.querySelector("#hidden2");
    let page_block = document.querySelector('.homepage-to-hidden');
    page_block.classList.remove('hidden');
    madeforyou_hidden.classList.add('hidden');
    releases_hidden.classList.add('hidden');    
}

function createNewPlaylist(){
    const new_div = document.createElement('div');
    const new_a = document.createElement('a');
    new_a.classList.add('link-list');
    new_a.setAttribute('href', '#');

    const new_img = document.createElement('img');
    new_img.classList.add('img-list-playlist'); 
    new_img.src = 'images/new0.png';
    
    const new_span = document.createElement('span');

    const new_strong = document.createElement('strong');
    new_strong.textContent = "Nuova Playlist"; 

    const new_br = document.createElement('br');
    const new_text = document.createTextNode("Playlist • 0 songs");

    new_div.appendChild(new_a);
    new_a.appendChild(new_img);
    new_a.appendChild(new_span);
    new_span.appendChild(new_strong);
    new_span.appendChild(new_br);
    new_span.appendChild(new_text);
    
    existingDiv = document.querySelector('#playlist-list');
    existingDiv.appendChild(new_div);
}

let page = document.documentElement;
let fullscreen = document.querySelector('#full-screen');
fullscreen.addEventListener("click", fullScreen);

let showall1 = document.querySelector("#showall1");
showall1.addEventListener("click", showAll);

let showall2 = document.querySelector("#showall2");
showall2.addEventListener("click", showAll);

let back = document.querySelector("#arrow-left");
back.addEventListener("click", getBack);

let newplaylist = document.querySelector("#create-new-playlist");
newplaylist.addEventListener("click", createNewPlaylist);

