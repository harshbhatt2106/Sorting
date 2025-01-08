//--------------Bubble sort-----------------------
const array = [1,2,3,4,5];
let temp;
let IsSort = false;
for (let i = 0; i < array.length-1; i++)
{
    for (let j = 0; j < array.length-i-1; j++)
    {
        if (array[j]>array[j+1])
        {
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
            IsSort = true;
        }    
    }    
    if (!IsSorted)
    {
        break;
    }
}
array.forEach(data=>{
    console.log(data);
})