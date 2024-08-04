// function reverse(str){
//     var splitstring = str.split("");
//     var reversedarray = splitstring.reverse();
//     var joinarray = reversedarray.join("");
//     console.log(joinarray);
// }


// function countchar(str){
//     var splitstring = str.split("");
//     var count = splitstring.length;
//     console.log(count);
// }

// function cap(sentence){
//     var words = sentence.split(" ")
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].substr(1);        
//     }
//     var result = words.join(" ")
//     console.log(result); 
// }

// function findmax(arr){
//     var max = 0
//     for (var i = 0; i <= arr.length;i++){
//         if (arr[i] >arr[i+1] && max <= arr[i] ){
//             max = arr[i]
//         }   else if (arr[i+1] > arr[i] && max <= arr[i+1]){
//             max = arr[i+1]
//         }
//     }
// }

function findmin(arr){
    var min = 0
    for (var i = arr.length; i >=0 ;i--){
        if (arr[i]<= arr[i-1] && min >= arr[i]){
            min = arr[i]
        }   else if (arr[i-1] <= arr[i] && min >= arr[i-1]){
            min = arr[i-1]
        }
    }
    console.log(min);
}

// i = 7  min = 0
// i = 6  i - 1 = 5 arri = 7 arri-1 = 6
findmin([1,2,3,4,5,6,7])

