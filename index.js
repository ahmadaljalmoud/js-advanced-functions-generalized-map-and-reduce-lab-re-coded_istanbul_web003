// Add your functions here
// function map(src, fnc){
//     let array = [];

//     for (let i = 0; i < src.length; i++ ){
//         let element = src[i]
//         array.push(fnc(element))
//     }
//     return array;
// }

// function reduce(src, fnc, start){
//     let array = (!!start) ? start : src[0];
//     let i = (!!start) ? 0 : 1;

//     for (; i < src.length; i++){
//         array = fnc(src[i], array)
//     }
//     return array;
// }
function map(array, map){
    return array.map(map)
}
function reduce(array, reduceFunction, starting){
    if (!!starting == false){
        starting = array.shift();
    }
    return array.reduce(reduceFunction, starting)
} 