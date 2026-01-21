const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user || user.role !== 'employee') {
  alert("Unauthorized");
  window.location.href = "index.html";
}


const attendance =
  JSON.parse(localStorage.getItem(`attendance_${user.email}`)) || {};

let present = 0;
Object.values(attendance).forEach(a => {
  if (a.inTime && a.outTime) present++;
});
const absent = 26 - present;


const BASIC_SALARY = 30000;
const BONUS = present >= 22 ? 5000 : 0;
const deduction = absent * 500;
const netSalary = BASIC_SALARY + BONUS - deduction;
const attendancePercent = Math.round((present / 26) * 100);


document.getElementById("empName").innerText = user.name;
document.getElementById("empId").innerText = user.email.split("@")[0];
document.getElementById("salaryMonth").innerText =
  new Date().toLocaleString('default', { month: 'long', year: 'numeric' });

document.getElementById("basicSalary").innerText = BASIC_SALARY;
document.getElementById("bonus").innerText = BONUS;
document.getElementById("deduction").innerText = deduction;
document.getElementById("netSalary").innerText = netSalary;

document.getElementById("presentDays").innerText = present;
document.getElementById("absentDays").innerText = absent;
document.getElementById("attendancePercent").innerText = attendancePercent + "%";

function goBack() {
  window.location.href = "employee-dashboard.html";
}