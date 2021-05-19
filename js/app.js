// 'use strict';


// //globel
// let upperImageElement = document.getElementById('upper-image');
// let lowerImageElement = document.getElementById('lower-image');
// let sideImageElement = document.getElementById('side-image')

// let upperImageIndex;
// let lowerImageIndex;
// let sideImageIndex;
// let select = prompt('press number of votes you will take it');
// let maxAttempts = select;
// let userAttemptsCounter = 0;

// let allPro = [];
// let proName = ['wineglasscopy', 'watercan', 'unicorn', 'tauntaun', 'sweep', 'shark', 'scissors', 'petsweep', 'pen', 'dragon', 'dogduck', 'cthulhu', 'chair', 'bubblegum', 'breakfast', 'boots', 'bathroom', 'banana', 'bag'];
// let proVotes = [];
// let proShown=[];

// let newnewImageindex;
// let newImageindex = [];
// // let newlowerImageindex = [];
// // let newsideImageindex = [];

// ///////////////////////////////////////////////////////////////
// //object 

// function Product(name, source) {
//     this.name = name;
//     this.source = source;
//     this.votes = 0;
//     this.shown = 0;

//     allPro.push(this);
//     allPro.push(this.name);
//     allPro.push(this.source);
//     allPro.push(this.shown);
    
// }

// console.log(allPro);

// for (let i = 0; i < proName.length; i++) {
//     if (proName[i] === 'sweep') {
//         new Product(proName[i], `images/${proName[i]}.png`, 0);
//     } else {
//         new Product(proName[i], `images/${proName[i]}.jpg`, 0);

//     }
// }
// /////////////////////////////////////////////////
// ////////////////////////////////////////////////
// new Product('bag', '../imgs/bag.jpg');
// new Product('banana', '../imgs/banana.jpg');
// new Product('boots', '../imgs/boots.jpg');
// new Product('bubblegum', '../imgs/bubblegum.jpg')
// new Product('breakfast', '../imgs/breakfast.jpg');
// new Product('chair','../imgs/chair.jpg');
// new Product('bathroom', '../imgs/bathroom.jpg');
// /////////////////////////////////////////////////
// new Product('cthulhu', '../imgs/cthulhu.jpg');
// new Product('dogduck', '../imgs/dogduck.jpg');
// new Product('dragon', '../imgs/dragon.jpg');
// new Product('pen','../imgs/pen.jpg');
// new Product('petsweep', '../imgs/petsweep.jpg');
// new Product('scissors', '../imgs/scissors.jpg');
// //////////////////////////////////////////////////
// new Product('shark', '../imgs/shark.jpg');
// new Product('sweep', '../imgs/sweep.jpg');
// new Product('tauntaun', '../imgs/tauntaun.jpg')
// new Product('unicorn', '../imgs/unicorn.jpg');
// new Product('watercan', '../imgs/watercan.jpg');
// new Product('wineglass', '../imgs/wineglasscopy.jpg');
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// // random function

// function generateRandomIndex() {
//     return Math.floor(0.01* allPro.length);}

// console.log(generateRandomIndex(), 'gernerate');
// ///////////////////////////////////////////////////

// function renderImages() {
//     upperImageIndex = generateRandomIndex();
//     lowerImageIndex = generateRandomIndex();
//     sideImageIndex = generateRandomIndex();
//     console.log(upperImageIndex, lowerImageIndex, sideImageIndex, 'out');



//     // newImageindex.push([newImageindex[0] + 1, newImageindex[1] + 2, newImageindex[2] - 2]);
//     while (upperImageIndex === lowerImageIndex || upperImageIndex === sideImageIndex || lowerImageIndex === sideImageIndex) {
//         upperImageIndex = generateRandomIndex();
//         lowerImageIndex = generateRandomIndex();
//         sideImageIndex = generateRandomIndex();
//     }
//     console.log(upperImageIndex, lowerImageIndex, sideImageIndex, 'w1')

//     // newImageindex.push(allPro[upperImageIndex].name);
//     // newImageindex.push(allPro[lowerImageIndex].name);
//     // newImageindex.push(allPro[sideImageIndex].name);


//     // if(newImageindex[0]!=upperImageIndex && newImageindex!=lowerImageIndex && newImageindex!=sideImageIndex){
//     if (newImageindex.includes(allPro[upperImageIndex].name) || newImageindex.includes(allPro[lowerImageIndex].name) || newImageindex.includes(allPro[sideImageIndex].name)) {
//         renderImages();

//     }
//     console.log(newImageindex, 'if');




//     newImageindex[0] = allPro[upperImageIndex].name;
//     newImageindex[1] = allPro[lowerImageIndex].name;
//     newImageindex[2] = allPro[sideImageIndex].name;
//     // allPro[newImageindex[0]].shown++;
//     // allPro[newImageindex[1]].shown++;
//     // allPro[newImageindex[2]].shown++;




//     upperImageElement.src = allPro[upperImageIndex].source;
//     lowerImageElement.src = allPro[lowerImageIndex].source;
//     sideImageElement.src = allPro[sideImageIndex].source;

//     allPro[upperImageIndex].shown+1;
//     allPro[lowerImageIndex].shown+1;
//     allPro[sideImageIndex].shown+1;





// }

// // for(let i=0;i<userAttemptsCounter;i++){
// //     renderImages();
// // }





// renderImages();


// upperImageElement.addEventListener('click', handleUserClick);
// lowerImageElement.addEventListener('click', handleUserClick);
// sideImageElement.addEventListener('click', handleUserClick);

// function handleUserClick(event) {
//     userAttemptsCounter++;
//     // console.log(userAttemptsCounter);
//     if (userAttemptsCounter <= maxAttempts) {
//         // console.log(userAttemptsCounter);
//         if (event.target.id === 'upper-image') {
//             allPro[upperImageIndex].votes = allPro[upperImageIndex].votes + 1;
//         } else if (event.target.id === 'lower-image') {


//             allPro[lowerImageIndex].votes = allPro[lowerImageIndex].votes + 1;
//         } else {

//             allPro[sideImageIndex].votes = allPro[sideImageIndex].votes + 1;

//         }

//         renderImages();
//     } else {
//         upperImageElement.removeEventListener('click', handleUserClick);
//         lowerImageElement.removeEventListener('click', handleUserClick);
//         sideImageElement.removeEventListener('click', handleUserClick);



//         for (let i = 0; i < allPro.length; i++) {
//             proVotes.push(allPro[i].votes);
//             proShown.push(allPro[i].shown);
//         }

//         viewChart();
//     }
// }


// // console.log(allPro);



// ////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////
// //chart

// function viewChart() {

//     let ctx = document.getElementById('myChart').getContext('2d');

//     let myChart = new Chart(ctx, {
//         type: 'bar',
//         data: {
//             labels: proName,
//             datasets: [{
//                 label: '# of product votes',
//                 data: proVotes,
//                 backgroundColor: 'black',
//                 borderColor: 'black',
//                 borderWidth: 1
//             },
//             {
//                 label: '# of product shown',
//                 data: proShown,
//                 backgroundColor: 'red',
//                 borderColor: 'red',
//                 borderWidth: 1,
//             }
//             ]
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true
//                 }
//             }
//         }
//     });

// }
// // console.log(proVotes, 'v');
// // console.log(proName);
// // console.log(proShown, 's');


// //////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////
// //button

// let button = document.getElementById('showresult');
// let parent = document.getElementById('container');
// button.addEventListener('click', createFun);

// function createFun() {
//     let list = document.getElementById('result');
//     let liElement;
//     for (let i = 0; i < allPro.length; i++) {
//         liElement = document.createElement('li');
//         list.appendChild(liElement);
//         liElement.textContent = `Name of Product (${allPro[i].name})   and get   (${allPro[i].votes})  of   Votes `;


//     }
// }
// //////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////