// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(arr){
    return arr.slice(0, 2);
}   

function returnLastTwoDrivers(arr){
    return arr.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
     return ((fare) => multiplier * fare)
    
}

const fareDoubler = fare => createFareMultiplier(2)(fare)

const fareTripler = fare => createFareMultiplier(3)(fare)

function selectDifferentDrivers(arr, driverSelect){
    return driverSelect(arr)
}