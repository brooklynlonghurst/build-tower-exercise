//we need a function that takes in a number. this number will be how many * i want to be printed. the *'s are strings. 
//i want to loop over the how many * i'll need and print them out with whitespace i think?


let startingArr = []

function tower(num){
    let star = '*'
    for(let i = 0; i < num; i++){
        startingArr.push(star)
        star += '**'
        for(let k = 0; k < i; k++){
            startingArr[k] = ' ' + startingArr[k] + ' '
        }
    } 
    return startingArr
}

console.log(tower(10))