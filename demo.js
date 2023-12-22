//problem statement -1
// checking sum zero [-5,-4,-2,0,2,4,6,8]

function getSumPairZero(array){
    for(let number of array){
        for( let j =1; j<array.length; j++){
            if(number + array[j]===0){
                return [number,array[j]]
            }
        }
    }
}
console.log(getSumPairZero([-5,10,0,2,4,6,8]))
