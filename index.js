// Code your solutions in this file
/*for (let age = 30; age < 40; age++ ) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    //debugger;
}*/

/*---------------------------------------------------------------------------------------------------------------------*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
console.log(`Wrapped ${gifts[i]} and added a bow!`);
//debugger;
    }
    return gifts;
};
wrapGifts(gifts);*/

/*----------------------------------------------------------------------------------------------------------------------*/

const namesOfpersons = ["Guadalupe", "Ollie", "Aki"];
const surprise = "surprise";
const thanksMsges = [];

function writeCards(namesOfpersons, surprise) {

    for (let i = 0; i < namesOfpersons.length; i++) {


        const name = namesOfpersons[i];// Note: We must to declare this variable into for loop

        const thanksMsg = `Thank you, ${name}, for the wonderful ${surprise} gift!`;
        thanksMsges.push(thanksMsg);

        debugger;
    }
    return thanksMsges;
    
}

//console.log(writeCards(namesOfpersons, surprise));

/*----------------------------------------------------------------------------------------------------------------------*/

const startWithNumber = 15;
function countDown(startWithNumber) {
    let i = startWithNumber;

    while (i >= 0) {



        console.log(i);
        i--;
        //debugger;
    }
    //return startWithNumber;
}
countDown(startWithNumber);







