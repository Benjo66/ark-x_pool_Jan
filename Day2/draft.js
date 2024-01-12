let  i = 10;

do{
console.log(i);
i--;
}while(i >= 0);
console.log("==========")
console.log("i = ",i)
i = 10;
console.log("==========")
while(true)
{
    if (i >= 0)
    {
        console.log(i);
        i--;
    }
    else 
        break;
}
let str = ''
let margin_left = '';
let total_len = 5;
for(let k = 0; k < 5; k++)
{
    str = '';
    // if()
    for (let g = 0; g < 2; g++)
    {
        margin_left += " ";
    }
    for(let j = 0; j < k; j++)
    {
        str += "*"
    }
    console.log(margin_left+str);
}

function exampleVarScope()
{
    if(true)
    {
        var x = 10;
        console.log(x);
    }
    console.log(x);

}
// console.log(x)
exampleVarScope()


