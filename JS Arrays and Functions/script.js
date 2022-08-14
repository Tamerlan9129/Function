const arr = ["Tamerlan",31,"Alimardanli",1991];
// newPush(arr,`Oldman man`,2);
function newPush(array,element,index){
    if (index>array.length-1){
        while(index!=array.length){
            array.push(undefined);

        }

        // arr2.push(element);
    }
    const arr2 = array.splice(index);
    array.push(element);
    const result = array.concat(arr2);
    console.log(result);
    
    
    
}

//task2

newPop(arr,5);

function newPop(array,index){
    if(index>array.length){
        console.log("Out of bounds");
        return;
    }
    for (let i = index; i < array.length; i++) {
        
        array[i]=array[i+1];
    }
    array.length-=1;
        console.log(array);
    
}

