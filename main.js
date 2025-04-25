function filterPrime(n,m) {
  const start = Math.min(n, m) + 1;
  const end = Math.max(n, m) - 1;
  const arr = Array.from({length:end-start+1},(_,i)=>i+start)
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
      console.log(arr[i]);
    }

  }
    
    
    
}

filterPrime(0,10)


