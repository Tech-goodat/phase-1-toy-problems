//net salary calculator
function getNetSalary(){
    let basicSalary=prompt("Enter your basic salary");
    let benefits=prompt("Enter your benefits");

    let grossSalary=parseInt(basicSalary)+parseInt(benefits);

    if(grossSalary>800000){
        let paye = grosssalary * 0.35;
        
    }
    else if(grossSalary> 500000){
        let paye=grossSalary *0.325;
    }
    else if(grossSalary> 32333){
        let paye=grossSalary *0.3;
    }
    else if(grossSalary> 24000){
        let paye=grossSalary *0.25;
    }
    else{
        let paye=grossSalary *0.1;
    }
//calculate nhif deduction
let nhif=[
    {min:0, max:5999, amount:150},
    {min:6000, max:7999, amount:300},
    {min:8000, max:11999, amount:400},
    {min:12000, max:14999, amount:500},
    {min:15000, max:19999, amount:600},
    {min:20000, max:24999, amount:750},
    {min:25000, max:29999, amount:850},
    {min:30000, max:34999, amount:900},
    {min:35000, max:39999, amount:950},
    {min:40000, max:44999, amount:1000},
    {min:45000, max:49999, amount:1100},
    {min:50000, max:59999, amount:1200},
    {min:60000, max:69999, amount:1300},
    {min:70000, max:79999, amount:1400},
    {min:80000, max:89999, amount:1500},
    {min:90000, max:99999, amount:1600},
    {//above 100000
    min:100000, max:Infinity, amount:1700}
]
//calculate nhif deduction
for (let i of nhif) {
    if (grossSalary >= i.min && grossSalary <= i.max) {
        let nhifDeduction = i.amount;
        break;
    }
}
//The employer and employee each contribute 6% of pensionable pay to NSSF


let nssfRates=[
    {min:0, max:6000, amount:0.06},
    {min:6000, max:18000, amount:0.06},
]

    let nssfDeduction;

for (let i of nssfRates){
    if(grossSalary>=i.min && grossSalary<=i.max){
        nssfDeduction=i.amount;
        break;
    }
}
//calculate net salary

let deductions=paye+nhifDeductions+nssfDeductions
let netSalary = grossSalary - deductions;
alert('Your net salary is Ksh. ' + netSalary);
}


