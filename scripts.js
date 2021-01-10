let fhApp = {};
// Selectors
fhApp.chooseWeDev = document.querySelector('.firsth1');
fhApp.choosePhoto = document.querySelector('.secondh1');

// Functions
fhApp.Choose = () => {
    fhApp.chooseWeDev.addEventListener('click', e => console.log('frank'));
    fhApp.choosePhoto.addEventListener('click', e => console.log('hoedl'));
};

//Initialize
fhApp.init = () => {
    fhApp.Choose()
    console.log('Welcome Frank Hoedl')
};

// Document Ready
let ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
};
ready(() => fhApp.init());


// create function to determine position of the cursor
// if on the left choose past - photography
// if on the right choose future - web development
// instead of click function respond on hover
// animation to cover most of the screen on side or another
    // create css for new background selection
    // 
// leave a portion to access the other
// 