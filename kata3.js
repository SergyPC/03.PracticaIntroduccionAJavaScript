/*
Valor:
* 2 
* 3
* 4
* 5
* 6
* 7
* 8
* 9
* 10 /Ten (T)
* dama/Jack (J)
* reina/Queen (Q)
* rey/King (K)
* as/Ace (A). 

Picas: Spades
Trébol: Clover
Corazón: Heart
Diamante: Diamond
*/

//Baraja Odenada
const tidyDeck = [
    'S02', 'S03','S04','S05','S06','S07','S08','S09','S10','S11','S12','S13','S14', //Picas: Spades
    'C02', 'C03','C04','C05','C06','C07','C08','C09','C10','C11','C12','C13','C14', //Trébol: Clover
    'H02', 'H03','H04','H05','H06','H07','H08','H09','H10','H11','H12','H13','H14', //Corazón: Heart
    'D02', 'D03','D04','D05','D06','D07','D08','D09','D10','D11','D12','D13','D14'  //Diamante: Diamond
];

//Baraja Aleatoria
let RandomDeck = [];

//Ponemos a cero las manos ganadoras
let winningPokerHand = new Array(9);
//winningPokerHand = ['HihgCard', 'Pair', 'TwoPairs', 'ThreeOfAKind', 'Straight', 'Flus', 'FullHouse', 'FourOfAKind', 'StraightFlush'];
//winningPokerHand = ['CartaAlta', 'Pareja', 'DoblePareja', 'Trio', 'Escalera', 'Color', 'Full(Trio+Pareja)', 'Poker', 'EscaleraColor'];
for(let count=0; count<9; count++) {
    winningPokerHand[count] = new Array(2);
    winningPokerHand[count][0] = 0; //Gamer1
    winningPokerHand[count][1] = 0; //Gamer2
}

/*
//PREVIEW POSSIBLE WINNING MOVES
for (let index = 0; index < winningPokerHand.length; index++) {
    console.log(`Jugador1 - Objeto[${index}][0]: ${winningPokerHand[index][0]}`);
    console.log(`Jugador2 - Objeto[${index}][1]: ${winningPokerHand[index][1]}`);
}
*/

// Retorna una carta aleatoria entre min (incluido) y max (excluido)
const getCard = (min, max) => {
    //return Math.floor(Math.random() * (max - min)) + min;
    return tidyDeck[(Math.floor(Math.random() * (max - min)) + min)];
}

//console.log(getCard(0,52));
//console.log(tidyDeck.length); //Lleno: 52
//console.log(RandomDeck.length); //Vacío: 0 

//Barajar
const shuffle = (tidyDeck) => {
    let lettersRemain = 52;
    let card = "";
    let exist = 0;
    let deck = [];
    while (lettersRemain) {
        card = getCard (0,52);
        exist = 0;
        for (let position = 0; position < deck.length; position++) {
            if (deck[position] === card)
                exist = 1;
        }
        if (!exist) {
            deck.push(card);
            lettersRemain--;
        }
    }
    return deck;
}

RandomDeck = shuffle(tidyDeck);

/*
// Ver cartas desordenadas
for (let index = 0; index < RandomDeck.length; index++) {
    console.log(`RandomDeck[${index}]: ${RandomDeck[index]}`);
}
*/

let giveMeHand = (RandomDeck) => {
    let hand = [];
    for (let count = 0; count < 5; count++) {
        hand.push(RandomDeck[0]);
        RandomDeck.shift();
    }
    return hand;
}

let hand1 = giveMeHand(RandomDeck).sort();
let hand2 = giveMeHand(RandomDeck).sort();


/*********************************************/
/*********************************************/
/*********************************************/
//winningPokerHand = [+0            1       2           3              +4          +5      6            7              +8];
//winningPokerHand = ['HihgCard', 'Pair', 'TwoPairs', 'ThreeOfAKind', 'Straight', 'Flus', 'FullHouse', 'FourOfAKind', 'StraightFlush'];
//winningPokerHand = ['CartaAlta', 'Pareja', 'DoblePareja', 'Trio', 'Escalera', 'Color', 'Full(Trio+Pareja)', 'Poker', 'EscaleraColor'];
//Picas: Spades
//Trébol: Clover
//Corazón: Heart
//Diamante: Diamond
//hand1 = ['C06','C08','C05','C07','C04'].sort(); //Escalera de color
//hand2 = ['C06','C08','C05','C07','C04'].sort(); //Escalera de color
//hand1 = ['D04','C04','S04','H04','C13'].sort(); //Poker
//hand2 = ['D03','C03','S03','H03','C13'].sort(); //Poker
//hand1 = ['D13','C13','S13','D02','C02'].sort(); //Full
//hand2 = ['D14','C14','S14','D02','C02'].sort(); //Full
//hand1 = ['D05','D07','D03','D02','D10'].sort(); //Color
//hand2 = ['D05','D07','D03','D02','D09'].sort(); //Color
//hand1 = ['S02','C04','D03','D06','D05'].sort(); //Escalera
//hand2 = ['S07','C04','D03','D06','D05'].sort(); //Escalera
//hand1 = ['S03','C03','H03','D06','D05'].sort(); //Trio
//hand2 = ['S07','C07','H07','D06','D05'].sort(); //Trio
//hand1 = ['S04','C02','H02','D04','D05'].sort(); //Doble Pareja
//hand2 = ['S05','C02','H03','D03','D05'].sort(); //Doble Pareja
//hand1 = ['S03','C03','H04','D07','D05'].sort(); //Pareja
//hand2 = ['S05','C02','H04','D07','D05'].sort(); //Pareja
console.log(`Hand1: ${hand1}`);
console.log(`Hand2: ${hand2}`);
/*********************************************/
/*********************************************/
/*********************************************/


/*
//HABRÍA QUE DIVIDIRLO EN 2 ARRAYS: 1 PARA EL TIPO DE CARTA Y OTRO PARA EL NUMERO DE CARTA
let splitTypeHand1 = new Array(5);
let splitNumbersHand1 = new Array(5);
let splitTypeHand2 = new Array(5);
let splitNumbersHand2 = new Array(5);

let split2DHand = (split2DHand, hand) => {
    for(let count=0; count<5; count++) {
        let cardArray = hand[count].toString().split('');
        split2DHand[count] = new Array(2);
        split2DHand[count][0] = cardArray[0]; //TypeCard
        split2DHand[count][1] = cardArray[1] + cardArray[2]; //NumberCard
    }
    return split2DHand.sort();
}

split2DHand1 = split2DHand(split2DHand1, hand1);
split2DHand2 = split2DHand(split2DHand2, hand2);
*/


//PRUEBO A DARLE LA VUELTA AL NumberCard Y A TypeCard
let split2DHand1 = new Array(5);
let split2DHand2 = new Array(5);

let split2DHand = (split2DHand, hand) => {
    for(let count=0; count<5; count++) {
        let cardArray = hand[count].toString().split('');
        split2DHand[count] = new Array(2);
        split2DHand[count][0] = cardArray[1] + cardArray[2]; //NumberCard
        split2DHand[count][1] = cardArray[0]; //TypeCard
    }
    return split2DHand.sort();
}

split2DHand1 = split2DHand(split2DHand1, hand1);
split2DHand2 = split2DHand(split2DHand2, hand2);


/*
let split2DHand1 = new Array(5);
let split2DHand2 = new Array(5);

let split2DHand = (split2DHand, hand) => {
    for(let count=0; count<5; count++) {
        let cardArray = hand[count].toString().split('');
        split2DHand[count] = new Array(2);
        split2DHand[count][0] = cardArray[0]; //TypeCard
        split2DHand[count][1] = cardArray[1] + cardArray[2]; //NumberCard
    }
    return split2DHand.sort();
}

split2DHand1 = split2DHand(split2DHand1, hand1);
split2DHand2 = split2DHand(split2DHand2, hand2);
*/


/*
for(let count=0; count<5; count++) {
    let cardArray = hand1[count].toString().split('');
    split2DHand1[count] = new Array(2);
    split2DHand1[count][0] = cardArray[0]; //TypeCard
    split2DHand1[count][1] = cardArray[1] + cardArray[2]; //NumberCard

    cardArray = hand2[count].toString().split('');
    split2DHand2[count] = new Array(2);
    split2DHand2[count][0] = cardArray[0]; //TypeCard
    split2DHand2[count][1] = cardArray[1] + cardArray[2]; //NumberCard
}
*/

/*
//PREVISUALIZAR MANOS DIVIDIDAS
for(let count=0; count<hand1.length; count++) {
    console.log(`split2DHand1[${count}][0]:${split2DHand1[count][0]}`);
    console.log(`split2DHand1[${count}][1]:${split2DHand1[count][1]}`);
}

for(let count=0; count<hand1.length; count++) {
    console.log(`split2DHand2[${count}][0]:${split2DHand2[count][0]}`);
    console.log(`split2DHand2[${count}][1]:${split2DHand2[count][1]}`);
}
*/


//ESCALERA DE COLOR (OK)
//hand1 = ['C06','C08','C05','C07','C04'].sort();
/*
if(split2DHand1[0][0]===split2DHand1[1][0] && split2DHand1[0][0]===split2DHand1[2][0] && split2DHand1[0][0]===split2DHand1[3][0] && split2DHand1[0][0]===split2DHand1[4][0])
{
    let numIni = 0, numFin = 0, isSequential = 1;
    for (let index = 1; index < 5; index++) {
        numIni = parseInt(split2DHand1[0][1])+index;
        numFin = parseInt(split2DHand1[0+index][1]);
        //console.log("numIni: " + numIni);
        //console.log("numFin: " + numFin);
        if (numIni !== numFin) {
            isSequential = 0;
            index = 5;
        }
    }
    if(isSequential){
        console.log("Es escalera de color");
    }
}
*/


let loadPlays = (split2DHand, hand, winningPokerHand, player) => {
    //HihgCard (CartaAlta)
    let num = 0;
    let max = 0;
    for (let index = 0; index < hand.length; index++) {
        num = parseInt(hand[index].substr(1,2));
        if (num > max)
            max = num;
    }
    winningPokerHand[0][player] = max;

    //Flus (Color)
    if(split2DHand[0][1]===split2DHand[1][1] && split2DHand[0][1]===split2DHand[2][1] && split2DHand[0][1]===split2DHand[3][1] && split2DHand[0][1]===split2DHand[4][1])
        winningPokerHand[5][player] = max; //We put the highest card (max)
    
    //Straight (Escalera): [Guardamos el último valor más alto]
    let numIni = 0, numFin = 0, isSequential = 1;
    for (let index = 1; index < 5; index++) {
        numIni = parseInt(split2DHand[0][0])+index;
        numFin = parseInt(split2DHand[0+index][0]);
        //console.log("numIni: " + numIni);
        //console.log("numFin: " + numFin);
        if (numIni !== numFin) {
            isSequential = 0;
            index = 5;
        }
    }
    if(isSequential)
        winningPokerHand[4][player] = parseInt(split2DHand[4][0]);

    //StraightFlush (EscaleraColor)
    if(winningPokerHand[5][player] && winningPokerHand[4][player])
        winningPokerHand[8][player] = winningPokerHand[4][player];

    //Contamos cartas para Poker/Trio/DoblesParejas/Pareja...
    let countCards = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    num = 0;
    for (let index = 0; index < hand.length; index++) {
        num = parseInt(hand[index].substr(1,2));
        countCards[num-2]+=1; //The number 2 is in countCards[0] (-2)
    }
    //console.log ("countCards: " + countCards);

    //Poker/Trio/DoblesParejas/Pareja
    let pairFound = 0;
    let threeOfAKindFound = 0;
    for (let i = 0; i < countCards.length; i++) {
        if(countCards[i]===2 && !pairFound){
            //At least we have 1 pair
            winningPokerHand[1][player] = i+2; //+2: Because countCards[0] = card 2
            for (let x = (i+1); x < countCards.length; x++) {
                if(countCards[x]===2) //We have to control two pairs
                    winningPokerHand[2][player] = x+2; //+2: Because countCards[0] = card 2
            }
            pairFound = 1;
        }
        if(countCards[i]===3) {
            winningPokerHand[3][player] = i+2; //+2: Because countCards[0] = card 2
            threeOfAKindFound = i+2;
        }
        if(countCards[i]===4)
            winningPokerHand[7][player] = i+2; //+2: Because countCards[0] = card 2
    }
    if (pairFound && threeOfAKindFound)
        winningPokerHand[6][player] = threeOfAKindFound;
    
    return winningPokerHand;
}

winningPokerHand = loadPlays(split2DHand1, hand1, winningPokerHand, 0);
winningPokerHand = loadPlays(split2DHand2, hand2, winningPokerHand, 1);

/*
//Flus (Color)
if(split2DHand1[0][0]===split2DHand1[1][0] && split2DHand1[0][0]===split2DHand1[2][0] && split2DHand1[0][0]===split2DHand1[3][0] && split2DHand1[0][0]===split2DHand1[4][0])
    winningPokerHand[5][0]=1;
if(split2DHand2[0][0]===split2DHand2[1][0] && split2DHand2[0][0]===split2DHand2[2][0] && split2DHand2[0][0]===split2DHand2[3][0] && split2DHand2[0][0]===split2DHand2[4][0])
    winningPokerHand[5][1]=1;
*/

/*
//Straight (Escalera): [Guardamos el último valor más alto]
let numIni = 0, numFin = 0, isSequential = 1;
for (let index = 1; index < 5; index++) {
    numIni = parseInt(split2DHand1[0][1])+index;
    numFin = parseInt(split2DHand1[0+index][1]);
    //console.log("numIni: " + numIni);
    //console.log("numFin: " + numFin);
    if (numIni !== numFin) {
        isSequential = 0;
        index = 5;
    }
}
if(isSequential)
    winningPokerHand[4][0] = parseInt(split2DHand1[4][1]);

//StraightFlush (EscaleraColor)
if(winningPokerHand[5][0] && winningPokerHand[4][0])
    winningPokerHand[8][0] = winningPokerHand[4][0];
*/

/*
//Straight (Escalera): [Guardamos el último valor más alto]
numIni = 0, numFin = 0, isSequential = 1;
for (let index = 1; index < 5; index++) {
    numIni = parseInt(split2DHand2[0][1])+index;
    numFin = parseInt(split2DHand2[0+index][1]);
    //console.log("numIni: " + numIni);
    //console.log("numFin: " + numFin);
    if (numIni !== numFin) {
        isSequential = 0;
        index = 5;
    }
}
if(isSequential)
    winningPokerHand[4][1] = parseInt(split2DHand2[4][1]);

//StraightFlush (EscaleraColor)
if(winningPokerHand[5][1] && winningPokerHand[4][1])
    winningPokerHand[8][1] = winningPokerHand[4][1];
*/

/*
//HihgCard (CartaAlta)
let num1 = 0, num2 = 0, max1 = 0, max2 = 0;
for (let index = 0; index < hand1.length; index++) {
    num1 = parseInt(hand1[index].substr(1,2));
    num2 = parseInt(hand2[index].substr(1,2));
    if (num1 > max1)
        max1 = num1;
    if (num2 > max2)
        max2 = num2;
}
winningPokerHand[0][0] = max1;
winningPokerHand[0][1] = max2;

//console.log("Max1:" + max1);
//console.log("Max2:" + max2);
*/


//winningPokerHand = [+0            1       2           3              +4          +5      6            7              +8];
//winningPokerHand = ['HihgCard', 'Pair', 'TwoPairs', 'ThreeOfAKind', 'Straight', 'Flus', 'FullHouse', 'FourOfAKind', 'StraightFlush'];
//winningPokerHand = ['CartaAlta', 'Pareja', 'DoblePareja', 'Trio', 'Escalera', 'Color', 'Full(Trio+Pareja)', 'Poker', 'EscaleraColor'];

/*
let countCards = [0,0,0,0,0,0,0,0,0,0,0,0,0];
let num = 0;

for (let index = 0; index < hand2.length; index++) {
    num = parseInt(hand2[index].substr(1,2));
    countCards[num-2]+=1; //The number 2 is in countCards[0] (-2)
}
console.log ("countCards: " + countCards);

let pairFound = 0;
for (let i = 0; i < countCards.length; i++) {
    if(countCards[i]===2 && !pairFound){
        //At least we have 1 pair
        winningPokerHand[1][1] = i+2; //+2: Because countCards[0] = card 2
        for (let x = (i+1); x < countCards.length; x++) {
            if(countCards[x]===2) //We have to control two pairs
                winningPokerHand[2][1] = x+2; //+2: Because countCards[0] = card 2
        }
        pairFound = 1;
    }
    if(countCards[i]===3)
        winningPokerHand[3][1] = i+2; //+2: Because countCards[0] = card 2
    if(countCards[i]===4)
        winningPokerHand[7][1] = i+2; //+2: Because countCards[0] = card 2
}
*/


console.log("---");
//PREVIEW POSSIBLE WINNING MOVES
for (let index = 0; index < winningPokerHand.length; index++) {
    console.log(`+Jugador1 - Objeto[${index}][0]: ${winningPokerHand[index][0]}`);
    //console.log(`Jugador2 - Objeto[${index}][1]: ${winningPokerHand[index][1]}`);
}
console.log("---");
for (let index = 0; index < winningPokerHand.length; index++) {
    //console.log(`Jugador1 - Objeto[${index}][0]: ${winningPokerHand[index][0]}`);
    console.log(`+Jugador2 - Objeto[${index}][1]: ${winningPokerHand[index][1]}`);
}
console.log("---");



let whoWins = (winningPokerHand) => {
    let winner = "";
    const pokerHand = ['Hihg card', 'Pair', 'Two pairs', 'Three of a kind', 'Straight', 'Flus', 'Full house', 'Four of a kind', 'Straight flush'];
    
    for(let count=8; count>=0; count--) {
        if(winningPokerHand[count][0] || winningPokerHand[count][1]) {
            if (winningPokerHand[count][0] > winningPokerHand[count][1])
                winner = `Player 1 win (${pokerHand[count]})`;
            else if (winningPokerHand[count][0] < winningPokerHand[count][1])
                winner = `Player 2 win (${pokerHand[count]})`;
            else
                winner = `The players tie (${pokerHand[count]})`;
            count = -1;
        }
    }

    /*
    if(winningPokerHand[8][0] || winningPokerHand[8][1]) {
        if (winningPokerHand[8][0] > winningPokerHand[8][1])
            winner = "Gamer 1 win (Straight Flush)";
        else if (winningPokerHand[8][0] < winningPokerHand[8][1])
            winner = "Gamer 2 win (Straight Flush)";
        else
            winner = "The players tie";
    }

    if(!winner && (winningPokerHand[8][0] || winningPokerHand[8][1])) {
        if (winningPokerHand[8][0] > winningPokerHand[8][1])
            winner = "Gamer 1 win (Straight Flush)";
        else if (winningPokerHand[8][0] < winningPokerHand[8][1])
            winner = "Gamer 2 win (Straight Flush)";
        else
            winner = "The players tie";
    }
    */
   

    return winner;
}

const convertHand = (hand) => {
    let handAux = ['','','','',''];
    let number = 0;
    //let splitCard = [];
    
    for (let count = 0; count < 5; count++) {
        //splitCard = hand[count].split;
        //handAux[count] = splitCard[]
        //parseInt(hand[index].substr(1,2));
        
        number = parseInt(hand[count].substr(1,2));
        if(number < 10)
            handAux[count] = number.toString().concat(hand[count].substr(0,1));
            //handAux[count] = (hand[count].substr(1,2)).toString().concat(hand[count].substr(0,1));
        else {
            switch (parseInt(hand[count].substr(1,2))){
                case 10:
                    handAux[count] = 'T'.toString().concat(hand[count].substr(0,1));
                    break;
                case 11:
                    handAux[count] = 'J'.toString().concat(hand[count].substr(0,1));
                    break;
                case 12:
                    handAux[count] = 'Q'.toString().concat(hand[count].substr(0,1));
                    break;
                case 13:
                    handAux[count] = 'K'.toString().concat(hand[count].substr(0,1));
                    break;
                case 14:
                    handAux[count] = 'A'.toString().concat(hand[count].substr(0,1));
                    break;  
            }
        }
        
       
    }
    

    return handAux;
}

console.log(`Player 1: ${convertHand(hand1)}`);
console.log(`Player 2: ${convertHand(hand2)}`);
console.log(whoWins(winningPokerHand));

/*
Jugador 1: 2H 3D 5S 9C KD
Jugador 2: 2C 3H 4S 8C KH
Jugador 1 gana (carta más alta)
*/