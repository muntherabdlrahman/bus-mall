'use strict';


//globel
let upperImageElement = document.getElementById('upper-image');
let lowerImageElement = document.getElementById('lower-image');
let sideImageElement = document.getElementById('side-image')

let upperImageIndex;
let lowerImageIndex;
let sideImageIndex;
// let select;
// function myinput(){
//      let select= document.getElementById("myText").autocomplete = "off" .valueOf(String);

//     }
//     myinput(); 
//     console.log(select);
     let select = prompt('press number of votes you will take it');
let maxAttempts=select; 
let userAttemptsCounter = 0;

let allPro = [];
let proName = [];
let proVotes = [];
let proShown = [];

// let newnewImageindex;
// let newImageindex = [];
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



////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
// local storage
function codejsonPro(){
    let data= JSON.stringify(allPro);
    localStorage.setItem('allPro',data);

}

// add function to getting product
function localstoragePro(){
    let stringobj0 = localStorage.getItem('allPro');
    let normalobj0 = JSON.parse(stringobj0);
    if ( normalobj0!== null ) {
       allPro=normalobj0; 
    }

}




/////////////////////////////////////////////////
////////////////////////////////////////////////
new Product('bag','./imgs/bag.jpg');
new Product('banana','./imgs/banana.jpg');
new Product('boots','./imgs/boots.jpg');
new Product('breakfast','./imgs/breakfast.jpg');
new Product('bubblegum','./imgs/bubblegum.jpg');
new Product('chair','./imgs/chair.jpg');
new Product('bathroom','./imgs/bathroom.jpg');
/////////////////////////////////////////////////
new Product('cthulhu','./imgs/cthulhu.jpg');
new Product('dogduck','./imgs/dogduck.jpg');
new Product('dragon','./imgs/dragon.jpg');
new Product('pen','./imgs/pen.jpg');
new Product('petsweep','./imgs/petsweep.jpg');
new Product('scissors','./imgs/scissors.jpg');
//////////////////////////////////////////////////
new Product('shark','./imgs/shark.jpg');
new Product('sweep','./imgs/sweep.jpg');
new Product('tauntaun','./imgs/tauntaun.jpg');
new Product('watercan','./imgs/watercan.jpg');
new Product('wineglasscopy','imgs/wineglasscopy.jpg');
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// random function

function generateRandomIndex() {
    return Math.floor(Math.random() * allPro.length);
}
///////////////////////////////////////////////////
let newImageindex=[];
newImageindex=[upperImageIndex,lowerImageIndex,sideImageIndex];

let newlowerImageindex = [];
newlowerImageindex=[upperImageIndex,lowerImageIndex,sideImageIndex]

function renderImages() {
    upperImageIndex = generateRandomIndex();
    lowerImageIndex = generateRandomIndex();
    sideImageIndex = generateRandomIndex();
    // console.log(upperImageIndex,lowerImageIndex,sideImageIndex,'kasjjasjk')
    
    
    // do {
        
    //     upperImageIndex = generateRandomIndex();
    //     lowerImageIndex = generateRandomIndex();
    //     sideImageIndex = generateRandomIndex();
        


    // }
    while (upperImageIndex === lowerImageIndex|| upperImageIndex === sideImageIndex || lowerImageIndex === sideImageIndex
       || newImageindex.includes(upperImageIndex|| newImageindex.includes(lowerImageIndex||newImageindex.includes(sideImageIndex))) ) {
    
    upperImageIndex = generateRandomIndex();
    lowerImageIndex = generateRandomIndex();
    sideImageIndex = generateRandomIndex();
    if(newImageindex===upperImageIndex && newImageindex=== lowerImageIndex && newImageindex=== sideImageIndex)
    renderImages(newImageindex+20) ;
    }
    newImageindex=[];

    newImageindex=[upperImageIndex,lowerImageIndex,sideImageIndex];
    // newlowerImageindex=[upperImageIndex,lowerImageIndex,sideImageIndex]

    // console.log(upperImageIndex,lowerImageIndex,sideImageIndex,'kasjjasjk')

    upperImageElement.src = allPro[upperImageIndex].source;
    lowerImageElement.src = allPro[lowerImageIndex].source;
    sideImageElement.src = allPro[sideImageIndex].source;






    allPro[lowerImageIndex].shown++;
    allPro[upperImageIndex].shown++;
    allPro[sideImageIndex].shown++;

    // console.log(shown,'sdasdadas')





}

renderImages();



upperImageElement.addEventListener('click', handleUserClick);
lowerImageElement.addEventListener('click', handleUserClick);
sideImageElement.addEventListener('click', handleUserClick); 


function handleUserClick(event) {
    
    userAttemptsCounter++;
    console.log(userAttemptsCounter);
    if (userAttemptsCounter <= maxAttempts) {
        // console.log(userAttemptsCounter);
        if (event.target.id === 'upper-image') {
            allPro[upperImageIndex].votes = allPro[upperImageIndex].votes + 1;
        } else if (event.target.id === 'lower-image') {


            allPro[lowerImageIndex].votes = allPro[lowerImageIndex].votes + 1;
        } else {

            allPro[sideImageIndex].votes = allPro[sideImageIndex].votes + 1;

        }

        renderImages();
    } 
    
    else {
        codejsonPro();
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


localstoragePro();
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////