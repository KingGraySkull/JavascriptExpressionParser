//elements to be sorted
var list = [7,2,1,6,8,5,3,4,0.01,0.6,100,1000,0.999,0.0005,660,550,114,0.01,1,200];
var list1 = [7,4,1,6,2,5,3,8];
console.log("Unsorted Array");
console.log(list1);

//bubble sort algorithmn
function bubbleSort(array) {
    
    for(var pass = 0; pass < array.length; pass++) {
        
        for(var index = 0; index < array.length - 1; index++) {
            
            if(array[index] === array[index + 1]) {
                continue;
            }
            else if(array[index] > array[index + 1]) {
                var temp = array[index];
                array[index] =  array[index + 1];
                array[index + 1] = temp;
            }
        }
    }
    console.log("Sorted using bubble sort\n");
    console.log(array);
}

//selection sort algorithmn
function selectionSort(array) {
    
    for(var index = 0; index < array.length; index++) {
        var min = index;
        
        for(var j = index+1; j < array.length; j++) {
            
            if(array[j] < array[min]) {
                min = j; //search minimum element in array
            }
        }//end for loop
        var temp = array[min];  //swap minimum element with current index
        array[min] = array[index];
        array[index] = temp;
    }//end for loop
    
    console.log("Sorted using selection sort\n");
    console.log(array);
}


//insertion sort algorithmn

function insertionSort(array) {
    
    for(var index = 1; index < array.length; index++) {
        var key = array[index];
        var j = index;
        
        while(array[j - 1] > key && j > 0) {
            array[j] = array[j - 1];
            j--;
        }//end while loop
        array[j] = key;
    }//end for loop
    
    console.log("Sorted using insertion sort\n");
    console.log(array);
}

//quick sort algorithmn
//select a random element from array called pivot element
//partiotion all elements less then pivot to the left to pivot index
//partiotion all elements greater then pivot to the right to pivot index
//recursively call the partition function

function partition(array,start,end) {
    var pivot = array[end];
    var pIndex = start;
    console.log("Pivot = "+pivot);
    for(var i = start; i <= end - 1; i++) {
        if(array[i] <= pivot) {
             swap(i,pIndex);
             pIndex += 1;
        }
    }
    swap(pIndex,end);
    return pIndex;
    
    function swap(element1,element2) {
        var temp = array[element2];
        array[element2] = array[element1];
        array[element1] = temp;
    }
}


function quickSort(array,start,end) {
    
    if(start < end){
        var pIndex = partition(array,start,end);
                     console.log("Start "+start+" End "+end+" array "+array);
                     quickSort(array,start,pIndex - 1);
                     quickSort(array,pIndex + 1,end);
    }
}

quickSort(list1,0,list1.length - 1);
console.log("Sorted using quick sort");
console.log(list1);


//merge sort algorithmn
function merge(left,right,array) {
    var nl = left.length;
    var nr = right.length;
    var i = j = k = 0;
    
    while(i < nl && j < nr) {
        
        if(left[i] <= right[j]) {
            
            array[k] = left[i];
            i++;
        }
        else {
            array[k] = right[j];
            j++;
        }
        k++;
    }
    
    while( i < nl) {
        array[k] = left[i];
        i++;
        k++;
    }
    
    while(j < nr) {
        array[k] = right[j];
        j++;
        k++;
    }
}



function mergeSort(array) {
    var n = array.length;
    
    if(n < 2) {
        return;
    }//end if
    else {
        var mid = Math.round(n/2);
        var left = new Array(mid);
        var right = new Array(n - mid);
        
        for(var l = 0; l <= mid - 1; l++) {
            
            //left array
            left[l] = array[l]; 
        }
        
        for(var r = mid; r <= n - 1; r++) {
            
            //right array
            right[r - mid] = array[r];
        }
        console.log("Left Array = " +left);
        console.log("Right Array = "+right);
        console.log("Original Array = "+array);
        mergeSort(left);
        mergeSort(right);
        merge(left,right,array);
        
    }//end else
}

//mergeSort(list1);
//console.log("Sorted using merge sort\n");
//console.log(list1);