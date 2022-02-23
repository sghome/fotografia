// Preload fonts
const preloadFonts = (id) => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};

const randomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

export {
    preloadFonts,
    randomNumber
};




/////////////////////////////////////////////////////////////


const imagesLoaded = require('imagesloaded');

// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

export { 
    preloadImages
};