// Opdracht 1: Destructure price en refreshRate uit onderstaand object, en log ze daarna in de terminal


const product = {
  price: 379,
  refreshRate: 50,
  screenType: 'LED',
}

let {price, refreshRate } = product;

console.log( 'price ' + price + ' refreshRate ' + refreshRate);

// Opdracht 2: Destructure type en brand uit onderstaand object, en log ze daarna in de terminal

const productInformation = {
  general: {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
  },
  screenQuality: 'Ultra HD/4K',
  smartTv: true,
}

let {type,brand} = productInformation.general;

console.log( 'type ' + type + ' brand ' + brand);

// Opdracht 3: destructure wifi en bluetooth uit onderstaand object, en log ze daarna in de terminal

const tvOptions = {
  options: {
    colors: [
      'black',
      'silver',
      'gold',
      'sand',
    ],
    connectivity: {
      popular: {
        wifi: true,
        bluetooth: false,
      },
      infrared: false,
    }
  },
};

let { wifi, bluetooth } = tvOptions.options.connectivity.popular;

console.log( (wifi?'has wifi':' has no wifi') + (bluetooth?' has bluetooth':' has no bluetooth') );

// Opdracht 4: Destructure beide waardes uit onderstaande array, en log ze daarna in de terminal

const connectivity = ['wifi', 'bluetooth'];

let [conWifi,conBluetooth]  = connectivity;

console.log( conWifi + ' ' + conBluetooth);

// Opdracht 5: Destructure de >eerste< en >derde< waarde uit onderstaande array, en log ze daarna in de terminal

const tvSizes = [41, 43, 46, 56, 65];

let [first,,third] = tvSizes;
console.log( first + ' ' + third);


// opdracht 6: Destructure name en adress uit de return value van deze functie en log ze daarna in de terminal

function getCompanyDetails() {
  return {
    name: 'Novi Hogeschool',
    adress: 'Zonnebaan 9, Utrecht',
  }
}

let { name: compName, adress : compAddress } = getCompanyDetails();
console.log( compName + ' ' + compAddress);

// opdracht 7: Destructure beide zinnetjes uit de return value van de getDetails functie en log ze in de terminal. Let op: de functie verwacht argumenten bij het aanroepen!

function getDetails(name, age) {
  return [`Your name is ${name}`, `You are ${age} years old`];
}

let [ detName, detAge ] = getDetails( "Peut", 62);
console.log( detName + ', ' + detAge );