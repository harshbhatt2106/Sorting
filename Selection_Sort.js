const array = [4,8,6,2,5,7]
let temp;
for (let i = 0; i < array.length-1; i++) 
{
    let  Small_Index = i;
    for (let j = i+1; j < array.length; j++) 
    {
        if (array[j]<array[Small_Index])
        {
            Small_Index = j;    
        }   
    }   
    temp = array[i];
    array[i] = array[Small_Index]
    array[Small_Index] = temp; 
}
array.forEach(data=>{
    console.log(data);
})
