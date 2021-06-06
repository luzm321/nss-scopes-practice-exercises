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


