/*function bubblesort (arr){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr = [5,7,8,9,1,2]
console.log(bubblesort(arr));
*/







function bubblesort(arr){
    let n = arr.length;
    for(let i = 0; i < n-1; i++){
        for(let j = 0; j < n - 1 - i; j++ ){
            if(arr[j] > arr[j+1]){ 
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

let arr =[5,6,7,9,3,8,2,1];
console.log(bubblesort(arr));