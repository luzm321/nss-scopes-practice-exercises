// EXPLORER CHAPTER: SCOPE IN JAVASCRIPT EXERCISES:

//----------------------------------C is for Cookie Exercise:------------------------------------

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"];

let y = 1

for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie.`)
};

//--------------------------------Conjunction Function Exercise------------------------------------

const conjunction = (firstWord, secondWord) => {
    const conjoinedWord = `${firstWord} ${secondWord}`;
    
    return conjoinedWord;
};

const conjoinedWords = conjunction("Master", "Card");
console.log(conjoinedWords);

//------------------------------Mod Squad Exercise:-------------------------------------------------

const modSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
        "start": "1968",
        "end": "1973"
    }
};

let HTMLRepresentation = `<h1>The Mod Squad</h1>`;

modSquad.members.forEach(member => {
    HTMLRepresentation += `<div>${member}</div>`;
});

console.log(HTMLRepresentation);

//-------------------------------------Simon Says Exercise:---------------------------------------

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]];

for (const location of locations) {
    if (location[0] > 2) {
        console.log("This location is invalid.");
    }

    console.log("This location is valid.");
};

//------------------------------Lambda Llama Exercise:--------------------------------------------

const llamaNamer = () => {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"];
    const randomizer = Math.floor(Math.random() * 7);

    const namer = () => {
        const suffix = " the Llama";
        const name = possibleNames[randomizer];
        return name + suffix;
    }

    return namer();   
}

let nameMaker = llamaNamer();
console.log(nameMaker);

