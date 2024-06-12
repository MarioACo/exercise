const show = () => {
    for(i = 0; i <= 100; i ++)
    {
        if(i % 3 === 0 && i % 5 === 0)
        {
            console.log(`El numero ${i} es un FizzBuzz`)
        }else if(i % 3 === 0){
            console.log(`El numero ${i} es un fizz`)
        }else if(i % 5 === 0)
        {
            console.log(`El numero ${i} es un buzzz`)
        }
    }
}

console.log(show());