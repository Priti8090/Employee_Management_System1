const teams = [
  {
    name: 'Team 1',
    attendance: 78,
    salary: 120000,
    employees: ['Emp 1', 'Emp 2']
  },
  {
    name: 'Team 2',
    attendance: 62,
    salary: 180000,
    employees: ['Emp 3', 'Emp 4', 'Emp 5']
  }
];

const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
new Chart(attendanceCtx, {
  type: 'bar',
  data: {
    labels: teams.map(t => t.name),
    datasets: [{
      label: 'Attendance %',
      data: teams.map(t => t.attendance)
    }]
  },
  options: {
    responsive: true,
    onClick: () => window.location.href = 'attendance.html'
  }
});

const salaryCtx = document.getElementById('salaryChart').getContext('2d');
new Chart(salaryCtx, {
  type: 'pie',
  data: {
    labels: teams.map(t => t.name),
    datasets: [{
      data: teams.map(t => t.salary)
    }]
  },
  options: {
    responsive: true,
    onClick: () => window.location.href = 'salary.html'
  }
});

function goToLeaves() {
  window.location.href = 'admin-pending-leaves.html';
}

function goToTeams() {
  window.location.href = 'employee-list.html';
}