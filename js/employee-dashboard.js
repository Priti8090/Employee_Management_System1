const user = JSON.parse(localStorage.getItem('loggedInUser'));

if (!user || user.role !== 'employee') {
  alert('Unauthorized Access');
  window.location.href = 'index.html';
}

const attendanceKey = `attendance_${user.email}`;
const attendance = JSON.parse(localStorage.getItem(attendanceKey)) || {};

let present = 0;
Object.values(attendance).forEach(a => {
  if (a.inTime && a.outTime) present++;
});
const absent = 26 - present;


new Chart(document.getElementById('attendanceChart'), {
  type: 'pie',
  data: {
    labels: ['Present', 'Absent'],
    datasets: [{
      data: [present, absent]
    }]
  },
  options: { responsive: true }
});


const leaves = JSON.parse(localStorage.getItem('leaves')) || [];
const myLeaves = leaves.filter(
  l => l.empEmail === user.email && l.adminStatus === 'approved'
);

document.getElementById('employeeName').innerText = user.name;
document.getElementById('leaveTaken').innerText = myLeaves.length;
document.getElementById('leaveRemaining').innerText = 12 - myLeaves.length;


const BASIC = 30000;
const BONUS = present >= 22 ? 5000 : 0;
const deduction = absent * 500;
const netSalary = BASIC + BONUS - deduction;

new Chart(document.getElementById('salaryChart'), {
  type: 'bar',
  data: {
    labels: ['Basic', 'Bonus', 'Net Salary'],
    datasets: [{
      label: 'Amount ₹',
      data: [BASIC, BONUS, netSalary]
    }]
  },
  options: { responsive: true }
});


function goToAttendance() { window.location.href = 'attendance.html'; }
function goToLeave() { window.location.href = 'leave-request.html'; }
function goToHolidays() { window.location.href = 'holidays.html'; }
function goToSalary() { window.location.href = 'salary.html'; }