function* myGenerator(){
    yield* [1, 2, 3, 4, 5]
    yield* "Arena"
    yield* arguments
}

const iterator = myGenerator(6, 7, 8);

const generatorArray = [];

for(let generator of iterator){
    generatorArray.push(generator);
}

console.log(generatorArray);

module.exports = {generatorArray, myGenerator};