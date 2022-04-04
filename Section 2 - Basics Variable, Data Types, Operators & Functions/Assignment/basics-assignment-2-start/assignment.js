const task3Element = document.getElementById('task-3');

function firstFunction() {
    
    alert("Hello World!");

}

function secondFunction(name) {
    
    alert(`Hai ${name}`);

}

firstFunction();
secondFunction('yogi');

task3Element.addEventListener('click', firstFunction);

function thirdFunction(firstString, secondString, thirdString) {
    
    return firstString + ' ' + secondString + ' ' + thirdString;
}

alert(thirdFunction('aku', 'adalah', 'anak'));