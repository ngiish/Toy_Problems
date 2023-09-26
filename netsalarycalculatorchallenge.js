//Net Salary Calculator(Challenge 3)


// Function to calculate Net Salary
function calculateNetSalary(basicSalary, benefits , relief) {
  // Calculate Gross Salary
  const grossSalary = (basicSalary + benefits) -2400;
//Relief function
const relief = 2400;

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

// Function to calculate Payee (Monthly Taxable Pay)
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
  
  
   // Function to calculate NSSF Deductions
  function calculateNSSF(grossSalary) {
    return grossSalary *0.15;

  }
  let nhifRates = [
    {min: 0, max:5999, deductions: 150},
    {min: 6000, max:7999, deductions: 300},
    {min: 8000, max: 11999, deductions: 400},
    {min: 12000, max: 14999, deductions: 500},
    {min: 15000, max: 19999, deductions: 600},
    {min: 20000, max: 24999, deductions: 750},
    {min: 25000, max: 29999, deductions: 850},
    {min: 30000, max: 34999, deductions: 900},
    {min: 35000, max: 39999, deductions: 950},
    {min: 40000, max: 44999, deductions: 1000},
    {min: 45000, max: 49999, deductions: 1100},
    {min: 50000, max: 59999, deductions: 1200},
    {min: 60000, max: 69999, deductions: 1300},
    {min: 70000, max: 79999, deductions: 1400},
    {min: 80000, max: 89999, deductions: 1500},
    {min: 90000, max: 99999, deductions: 1600},
    {min: 100000, max: infinity, deductions: 1700},
    
  ]
  // Function to calculate NHIF Deductions
  function calculateNHIF(grossSalary) {
    for (i=0; i>=min && i<=max; i++){
      return nhifRates.deductions;

    }
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
  
  


