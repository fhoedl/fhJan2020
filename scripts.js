console.log('hello!');

let fhApp = {};
fhApp.chooseWeDev = document.querySelector('.firsth1');
fhApp.choosePhoto = document.querySelector('.secondh1');

fhApp.Choose = () => {
    fhApp.chooseWeDev.addEventListener('click', function (e) {
        console.log('frank');
    });
    fhApp.choosePhoto.addEventListener('click', (e) => {
        console.log('hoedl');
    });
}
//Initialize 
fhApp.init = () => {
    fhApp.Choose()
    // console.log('Welcome Frank Hoedl')	   
}

// Document Ready
let ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    fhApp.init();   
});