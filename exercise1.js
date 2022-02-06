var pets = ['Marlo', 'Marvel', 'Marlin'];

pets.forEach(function(pet, myIndex){
    //console.log(pet);
    pets[myIndex] = pet.toUpperCase();
    console.log(pet);
    console.log(myIndex);
});

console.log(pets);

let words = ['One', 'Two', 'Three', 'Four'];
words.forEach(function(word){
    console.log(word);
    if(word === 'Two'){
        words.shift();
    }
});
"0 - One , 1 - Two, 2 - Three, 3 - Four" // 1

"0 - Two, 1 - Three, 2 - Four" // 
