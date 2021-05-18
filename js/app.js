'use strict';


//globel
let upperImageElement = document.getElementById('upper-image');
let lowerImageElement = document.getElementById('lower-image');
let sideImageElement = document.getElementById('side-image')

let upperImageIndex;
let lowerImageIndex;
let sideImageIndex;
let select = prompt('press number of votes you will take it');
let maxAttempts = select;
let userAttemptsCounter = 0;

let allPro = [];
let proName = [];
let proVotes = [];
let proShown = [];

let newnewImageindex;
let newImageindex = [];
// let newlowerImageindex = [];
// let newsideImageindex = [];

///////////////////////////////////////////////////////////////
//object 

function Product(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown = 0;

    allPro.push(this);
    proName.push(this.name);
}

/////////////////////////////////////////////////
////////////////////////////////////////////////
new Product('bag (1)', '../imgs/bag (1).jpg');
new Product('banana', '../imgs/banana.jpg');
new Product('boots', '../imgs/boots.jpg');
new Product('breakfast', '../imgs/breakfast.jpg');
new Product('bubblegum', '../imgs/bubblegum.jpg');
new Product('chair', '../imgs/chair.jpg');
new Product('bathroom', '../imgs/bathroom.jpg');
/////////////////////////////////////////////////
new Product('cthulhu', '../imgs/cthulhu.jpg');
new Product('dog-duck', '../imgs/dog-duck.jpg');
new Product('dragon', '../imgs/dragon.jpg');
new Product('pen', '../imgs/pen.jpg');
new Product('pet-sweep', '../imgs/pet-sweep.jpg');
new Product('scissors', '../imgs/scissors.jpg');
//////////////////////////////////////////////////
new Product('shark', '../imgs/shark.jpg');
new Product('sweep', '../imgs/sweep.png');
new Product('tauntaun', '../imgs/tauntaun.jpg');
new Product('unicorn', 'imgs/unicorn.jpg');
new Product('water-can', '../imgs/water-can.jpg');
new Product('wine-glass', '../imgs/wine-glass copy.jpg');
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// random function
let min=0;
let max=19;
function  generateRandomIndex() {
    return Math.floor((Math.random() * (max - min) ) + min * allPro.length);
  }
///////////////////////////////////////////////////

function renderImages() {
    upperImageIndex = generateRandomIndex();
    lowerImageIndex = generateRandomIndex();
    sideImageIndex = generateRandomIndex();
    
    let newImageindex = [upperImageIndex, lowerImageIndex, sideImageIndex];
    // console.log(newImageindex);

    // do {

    //     lowerImageIndex = generateRandomIndex();
    //     upperImageIndex = generateRandomIndex();
    //     sideImageIndex = generateRandomIndex();



    // } 

    
    if (newImageindex === sideImageIndex || newImageindex === lowerImageIndex || newImageindex === upperImageIndex); {
    for (let i = 0; i < 3; i++) {
            console.log(newImageindex, 'insidewhile')

            upperImageElement.src = allPro[upperImageIndex].source;
            lowerImageElement.src = allPro[lowerImageIndex].source;
            sideImageElement.src = allPro[sideImageIndex].source;


            allPro[lowerImageIndex].shown++;
            allPro[upperImageIndex].shown++;
            allPro[sideImageIndex].shown++;
            sideImageIndex+1;
            lowerImageIndex+1;
            upperImageIndex+1;

        }
         if(newImageindex=[upperImageIndex, lowerImageIndex, sideImageIndex]){
            upperImageElement.src = allPro[newImageindex[0]].source;
            lowerImageElement.src = allPro[newImageindex[1]].source;
            sideImageElement.src = allPro[newImageindex[2]].source;

            
            allPro[newImageindex[0]].shown++;
            allPro[newImageindex[1]].shown++;
            allPro[newImageindex[2]].shown++;
            console.log(newImageindex,'2f');



        }
    }







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
        } else if (event.target.id === 'lower-image') {


            allPro[lowerImageIndex].votes = allPro[lowerImageIndex].votes + 1;
        } else {

            allPro[sideImageIndex].votes = allPro[sideImageIndex].votes + 1;

        }






        renderImages();
    } else {
        upperImageElement.removeEventListener('click', handleUserClick);
        lowerImageElement.removeEventListener('click', handleUserClick);
        sideImageElement.removeEventListener('click', handleUserClick);



        for (let i = 0; i < allPro.length; i++) {
            proVotes.push(allPro[i].votes);
            proShown.push(allPro[i].shown);
        }

        viewChart();
    }
}


// console.log(allPro);



////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//chart

function viewChart() {

    let ctx = document.getElementById('myChart').getContext('2d');

    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: proName,
            datasets: [{
                label: '# of product votes',
                data: proVotes,
                backgroundColor: 'black',
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: '# of product shown',
                data: proShown,
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 1,
            }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}
// console.log(proVotes, 'v');
// console.log(proName);
// console.log(proShown, 's');


//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//button

let button = document.getElementById('showresult');
let parent = document.getElementById('container');
button.addEventListener('click', createFun);

function createFun() {
    let list = document.getElementById('result');
    let liElement;
    for (let i = 0; i < allPro.length; i++) {
        liElement = document.createElement('li');
        list.appendChild(liElement);
        liElement.textContent = `Name of Product (${allPro[i].name})   and get   (${allPro[i].votes})  of   Votes `;


    }
}
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////