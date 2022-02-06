// Filter method on Arrays
var grades = [1,7,9,3,4,4,2,5,8,10,6];
var firstClass = grades.filter(function(grade){
    return grade >=6;
})
console.log(firstClass);