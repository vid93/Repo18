let rockStar = new Map([
    ["artist", "The Rolling Stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"]
])

let newRock = new Map();

for(let key of rockStar){
    if(!key.includes("a")){
        newRock.set(key[0], key[1])
    }
}

console.log(newRock);

module.exports = {rockStar, newRock};