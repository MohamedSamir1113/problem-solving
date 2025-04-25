function filterPrime(n,m) {
  const start = Math.min(n, m) + 1;
  const end = Math.max(n, m) - 1;
  const arr = Array.from({length:end-start+1},(_,i)=>i+start)
  let primArr=[]
  //console.log(arr);
  for(i=0;i<arr.length;i++)
  {
    let isPrime = true;
    for(j=2;j<arr[i];j++)
    {
      if(arr[i]%j===0)
      {
        isPrime=false
        break;
      }
    }

    if (isPrime) {
       primArr.push(arr[i])
      }
      
    }
    console.log(`Output:${primArr}`);
    
    
    
}

filterPrime(5,10)
filterPrime(7,20)


