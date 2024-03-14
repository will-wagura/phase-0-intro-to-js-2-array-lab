const cats = ["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(){
    return [...cats, "Broom"];
}
function prependCat(){
    return ["Arnold", ...cats];
}
function removeLastCat(){
    return cats.slice(0, -1);
}
function removeFirstCat(){
    return cats.slice(1)
}