// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    // let newArray = []
    // newArray.push(array[0], array[1])
    // return newArray
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(i){
        return int * i
    }
}

// const fareDoubler = function(fair){
//     return createFareMultiplier(fair)(2)
// }

const fareDoubler = createFareMultiplier(2)

// const fareTripler = function(fair){
//     return createFareMultiplier(fair)(3)
// }

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, fun) {
    return fun(array)
}