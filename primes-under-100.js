function isPrime(num) {
    if (num <= 1) {
      return false
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
  
  function findPrimes(start, end) {
    const primes = []
    for (let num = start; num <= end; num++) {
      if (isPrime(num)) {
        primes.push(num)
      }
    }
    return primes
  }
  
  const primes = findPrimes(1, 100)
  console.log(primes)
  