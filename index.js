console.log ("test")

// ლუწის და კენტის ამოღება

const array =[15, 16, 17, 18, 19, 20]
const luwiArray = [];
const kentiArray = [];

for (let i= 0; i < array.length; i++)
{
   const num = array[i]
    
    if(num % 2 === 0) {
        luwiArray.push(num);}
        else {kentiArray.push (num);}
    }

    console.log('luwia', luwiArray )
    console.log ('kentia', kentiArray )

    // საშალო არითმეთკულის გამოოთვლა
    
    const arr =[15, 16, 17, 18, 19, 20]

    let plus = 0;

    for(let i=0; i < arr.length; i++)
    
        {
        plus += arr[i];
      }
      const average = plus / arr.length

      console.log("plus:", plus);
console.log("Average:", average);




