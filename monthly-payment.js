function calculateMonthlyPayment(principal, annualInterestRate, loanTerm) {
    // Convert annual interest rate to a monthly rate
    const r = annualInterestRate / 100 / 12; 
    // Convert loan term to months
    const t = loanTerm * 12; 
  
    
    const monthlyPayment = (principal * r) / (1 - Math.pow(1 + r, -t));
    // Return result rounded to 2 decimal places
    return monthlyPayment.toFixed(2); 
  }
  
  // Example:
  const loanAmount = 20000;
  const interestRate = 5;
  const loanDuration = 3; 
  
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanDuration);
  console.log("Monthly Payment:", monthlyPayment);
  