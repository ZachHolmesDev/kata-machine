/* 
When given two crystal balls that will break if dropped from a high enough distance, 
determine the exact spot in which it will break in the most optimized way.
*/ 

export default function two_crystal_balls(breaks: boolean[]): number {
    // get sqare root of the given array of floors
    const jumpAmmount: number = Math.floor(Math.sqrt(breaks.length))
    
    // loop through the array jumping the square root each time untill first ball breaks 
    let i: number = jumpAmmount
    for (; i < breaks.length; i += jumpAmmount) {
        if (breaks[i]) {
            break
        }
    }

    // jump back 1 square root and search forward untill ball breaks 
    i -= jumpAmmount
    // check i aswell so you dont search off the end of the array ?? math stuff idk
    for (let j = 0; j <= jumpAmmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i
        }

    }

    return -1

}