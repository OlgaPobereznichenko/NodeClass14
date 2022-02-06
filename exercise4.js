// objects

var person = {
    myName: 'Olga',
    age: 34,
    greet: function(){
        console.log("Hello!" + this.myName);
    },
    birthday: function(){
        age++;
    }
};

//console.log(person);
//console.log(person.myName);
//console.log(persone.age);
//console.log(person.city);
//person.city = 'Winnipeg';
//console.log(person[city]);

person.greet();
person.birthday();
console.log(person.age);

var properties = Object.keys(person);
console.log(properties);

var firstProp = properties[0];
console.log(person[firstProp]); // console.log(person[properties[0]]);