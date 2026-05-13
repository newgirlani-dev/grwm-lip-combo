const images={
    contour: [
        "assets/lip-contour/default-contour.svg",
        "assets/lip-contour/ann.webp",
        "assets/lip-contour/bare.webp",
        "assets/lip-contour/brownies.webp",
        "assets/lip-contour/bunny.webp",
        "assets/lip-contour/caffeinated.webp",
        "assets/lip-contour/cali.webp",
        "assets/lip-contour/dulce.webp",
        "assets/lip-contour/felt.webp",
        "assets/lip-contour/fetch.webp",
        "assets/lip-contour/fr.webp",
        "assets/lip-contour/hola.webp",
        "assets/lip-contour/lovebug.webp",
        "assets/lip-contour/maximo.webp",
        "assets/lip-contour/new.webp",
        "assets/lip-contour/rayearth.webp",
        "assets/lip-contour/sogood.webp",
        "assets/lip-contour/summer.webp",
        "assets/lip-contour/taylor.webp",
        "assets/lip-contour/truffle.webp"
    ], 

    booze: [
        "assets/lip-booze/default-booze.svg",
        "assets/lip-booze/clear.webp",
        "assets/lip-booze/cosmo.webp",
        "assets/lip-booze/long.webp",
        "assets/lip-booze/manhattan.webp",
        "assets/lip-booze/martini.webp",
        "assets/lip-booze/pink.webp",
        "assets/lip-booze/sangria.webp",
        "assets/lip-booze/soju.webp",
        "assets/lip-booze/tequila.webp",
        "assets/lip-booze/vodka.webp",
        "assets/lip-booze/weng.webp",
        "assets/lip-booze/whiskey.webp"
    ],

    maxx: [
        "assets/lip-maxx/default-maxx.svg",
        "assets/lip-maxx/aurora.webp",
        "assets/lip-maxx/bellini.webp",
        "assets/lip-maxx/confetti.webp",
        "assets/lip-maxx/disco.webp",
        "assets/lip-maxx/fringe.webp",
        "assets/lip-maxx/frisbee.webp",
        "assets/lip-maxx/hello.webp",
        "assets/lip-maxx/hot.webp",
        "assets/lip-maxx/kismet.webp",
        "assets/lip-maxx/love.webp",
        "assets/lip-maxx/maui.webp",
        "assets/lip-maxx/mimosa.webp",
        "assets/lip-maxx/rosebud.webp",
        "assets/lip-maxx/slush.webp",
        "assets/lip-maxx/tto.webp",
        "assets/lip-maxx/winter.webp"
    ],

    cushion: [
        "assets/cushion-tint/default-cushion.svg",
        "assets/cushion-tint/arctic.webp",
        "assets/cushion-tint/blackf.webp",
        "assets/cushion-tint/midnight.webp",
        "assets/cushion-tint/mint.webp",
        "assets/cushion-tint/peach.webp",
        "assets/cushion-tint/pink.webp",
        "assets/cushion-tint/rose.webp",
        "assets/cushion-tint/salted.webp",
        "assets/cushion-tint/total.webp"
    ]
};

const currentIndex = {
  contour: 0,
  booze: 0,
  maxx: 0,
  cushion: 0
};

function randomize(category) {
    let spinCount = 0;
    const totalSpins = 15;
    const imgElement = document.getElementById(`img-${category}`);

    const interval = setInterval(() => {
        const randomIdx = Math.floor(Math.random() * (images[category].length - 1)) + 1;
        imgElement.src = images[category][randomIdx];
        
        spinCount++;
        if (spinCount >= totalSpins) {
            clearInterval(interval);
            const finalIdx = Math.floor(Math.random() * (images[category].length - 1)) + 1;
            imgElement.src = images[category][finalIdx];
            currentIndex[category] = finalIdx; 
            boxElement.classList.add('selected');
        }
    }, 120);
}


const randomizeBtn = document.querySelector('.randomize-btn');

function showRandomizedModal() {
    const modal = document.getElementById('result-modal');
    const modalRow = document.getElementById('modal-row');
    const categories = ['contour', 'booze', 'maxx', 'cushion'];
    
    modalRow.innerHTML = ''; 
    let hasSelection = false;

    categories.forEach(cat => {
        if (currentIndex[cat] !== 0) {
            const imgPath = images[cat][currentIndex[cat]];
            const newImg = document.createElement('img');
            newImg.src = imgPath;
            modalRow.appendChild(newImg);
            hasSelection = true;
        }
    });

    if (hasSelection) {
        modal.style.display = 'flex';
    } else {
        alert("Click the boxes to pick your products first!");
    }
}

function closeModal() {
    document.getElementById('result-modal').style.display = 'none';
    const categories = ['contour', 'booze', 'maxx', 'cushion'];
    
    categories.forEach(cat => {
        currentIndex[cat] = 0;
        const imgElement = document.getElementById(`img-${cat}`);
        if (imgElement && images[cat] && images[cat][0]) {
            imgElement.src = images[cat][0]; 
        }
        boxElement.classList.remove('selected');
    });
}
