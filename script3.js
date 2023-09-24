//Net Salary Calculator(Challenge 3)
// Function to calculate Payee (Tax)
function calculatePayee(grossIncome) {
    // Calculate tax based on your country's tax rules
    // For example, you can use tax brackets and rates
    // This is a simplified example:
    if (grossIncome <= 24000) {
      return 0;
    } else if (grossIncome <= 40000) {
      return grossIncome * 0.1;
    } else {
      return grossIncome * 0.2;
    }
  }
  
  // Function to calculate NHIF Deductions
  function calculateNHIF(grossIncome) {
    // Calculate NHIF deductions based on your country's rules
    // This is a simplified example:
    if (grossIncome <= 10000) {
      return 150;
    } else if (grossIncome <= 20000) {
      return 300;
    } else {
      return 500;
    }
  }
  
  // Function to calculate NSSF Deductions
  function calculateNSSF(grossSalary) {
    // Calculate NSSF deductions based on your country's rules
    // This is a simplified example:
    return grossIncome * 0.05;
  }
  
  // Function to calculate Net Salary
  function calculateNetSalary(basicSalary, benefits) {
    // Calculate Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate Payee (Tax)
    const payee = calculatePayee(grossSalary);
  
    // Calculate NHIF Deductions
    const nhifDeductions = calculateNHIF(grossSalary);
  
    // Calculate NSSF Deductions
    const nssfDeductions = calculateNSSF(grossSalary);
  
    // Calculate Net Salary
    const netSalary = grossSalary - (payee + nhifDeductions + nssfDeductions);
  
    return {
      grossSalary,
      payee,
      nhifDeductions,
      nssfDeductions,
      netSalary,
    };
  }
  
  // Example usage:
  const basicSalary = 30000;
  const benefits = 5000;
  
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("Payee (Tax):", salaryDetails.payee);
  console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
  console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
  console.log("Net Salary:", salaryDetails.netSalary);
  