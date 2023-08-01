//Quick Question 1

new Set([1,1,2,2,3,4])

//returns: {1,2,3,4}

//Quick Question 2

[...new Set("referee")].join("")

//returns: "ref"

//Quick Question 3

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// Map m = {
//     0: {Array(3) => true},
//     1: {Array(3) => false}
// }

// hasDuplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = array => new Set(array).size != array.length

// vowelCount

function vowelCount(string){
    string = string.toLowerCase()
    const vowels = 'aeiou'
    let m = new Map();
    for(let char of string){
        if(vowels.includes(char)){
            if(m.has(char)){
                m.set(char, m.get(char) +1);
            } else{
                m.set(char, 1);
            }
        }
    }
    return m
} 

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }