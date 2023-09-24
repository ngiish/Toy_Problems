
//Net Salary Calculator(Challenge 3)
// Function to calculate Payee (Tax)
function calculatePayee(grossSalary) {

    if (grossSalary <= 24000) {
      return grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
      return grossSalary * 0.25;
    } else if (grossSalary<= 500000) {
        return grossSalary *0.3;        
    } else if(grossSalary<=800000){
        return grossSalary * 0.325;
    }else{
        return grossSalary * 0.35;
    }
      
    }
  
  
  // Function to calculate NHIF Deductions
  function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) {
      return 150;
    } else if (grossSalary <= 20000) {
      return 300;
    } else {
      return 500;
    }
  }
  
  // Function to calculate NSSF Deductions
  function calculateNSSF(grossSalary) {
    return grossSalary *0.2;

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
  //Let's assume Basic Salary and Benefits
  const basicSalary = 200000;
  const benefits = 50000;
  
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("Payee (Tax):", salaryDetails.payee);
  console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
  console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
  console.log("Net Salary:", salaryDetails.netSalary);
  
  


