'use strict';


//globel
let upperImageElement = document.getElementById('upper-image');
let lowerImageElement = document.getElementById('lower-image');
let sideImageElement = document.getElementById('side-image')


// variable
let upperImageIndex;
let lowerImageIndex;
let sideImageIndex;

// global counters
let maxAttempts = 24;
let userAttemptsCounter = 0;


// global array 
let allPro = [];

function Product(name, source) {
    this.name = name;
    this.source = source;

    this.votes = 0;
    allPro.push(this);
}

/////////////////////////////////////////////////
////////////////////////////////////////////////
new Product ('bag (1)','bag (1).jpg');
new Product ('banana','banana.jpg');
new Product ('boots','boots.jpg');
new Product ('breakfast','breakfast.jpg');
new Product ('bubblegum','bubblegum.jpg');
new Product ('chair','chair.jpg');
/////////////////////////////////////////////////
new Product ('cthulhu','cthulhu.jpg');
new Product ('dog-duck','dog-duck.jpg');
new Product ('dragon','dragon.jpg');
new Product ('pen','pen.jpg');
new Product ('pet-sweep','pet-sweep.jpg');
new Product ('scissors','scissors.jpg');
//////////////////////////////////////////////////
new Product ('scissors','scissors.jpg');
new Product ('sweep','sweep.png');
new Product ('tauntaun','tauntaun.jpg');
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// random function
function generateRandomIndex() {
    return Math.floor(Math.random() * allPro.length);
}

function renderImages() {
    upperImageIndex = generateRandomIndex();
    lowerImageIndex = generateRandomIndex();
    sideImageIndex = generateRandomIndex();
   
    do {
        lowerImageIndex = generateRandomIndex();
        upperImageIndex = generateRandomIndex();
        sideImageIndex = generateRandomIndex();
    } while (upperImageIndex === lowerImageIndex|| upperImageIndex === sideImageIndex ||lowerImageIndex=== sideImageIndex);

  
    upperImageElement.src = allPro[upperImageIndex].source;
    lowerImageElement.src = allPro[lowerImageIndex].source;
    sideImageElement.src = allPro[sideImageIndex].source;
}

renderImages();


upperImageElement.addEventListener('click', handleUserClick);
lowerImageElement.addEventListener('click', handleUserClick);
sideImageElement.addEventListener('click', handleUserClick);

function handleUserClick(event) {
    userAttemptsCounter++;
    console.log(userAttemptsCounter);
    if (userAttemptsCounter <= maxAttempts) {
        console.log(userAttemptsCounter);
        if (event.target.id === 'upper-image') {
            allPro[upperImageIndex].votes = allPro[upperImageIndex].votes + 1;
        }else{
        
            allPro[lowerImageIndex].votes = allPro[lowerImageIndex].votes + 1;
        
            allPro[sideImageIndex].votes = allPro[sideImageIndex].votes + 1;
        
        }

        




        renderImages();
    } else {
        upperImageElement.removeEventListener('click', handleUserClick);
        lowerImageElement.removeEventListener('click', handleUserClick);
        sideImageElement.removeEventListener('click', handleUserClick);

        
        let list = document.getElementById('result');
        let liElement;
        for (let i = 0; i < allPro.length; i++) {
            liElement = document.createElement('li');
            list.appendChild(liElement);
            liElement.textContent = `${allPro[i].name} has ${allPro[i].votes}  votes`;
            
        //    document.write('show-result',liElement.textContent = `${allPro[i].name} has ${allPro[i].votes}  votes`;
        //    )

        }
    }
}


console.log(allPro);