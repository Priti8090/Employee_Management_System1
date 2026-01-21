const employees = [
  {
    id: 'TL01',
    name: 'Rahul Sharma',
    designation: 'Team Lead',
    role: 'teamlead',
    itRole: 'Frontend Lead',
    salary: 90000,
    startDate: '2021-03-15'
  },
  {
    id: 'TL02',
    name: 'Neha Verma',
    designation: 'Team Lead',
    role: 'teamlead',
    itRole: 'Backend Lead',
    salary: 95000,
    startDate: '2020-11-01'
  },
  {
    id: 'EMP01',
    name: 'Amit Kumar',
    designation: 'Employee',
    role: 'employee',
    itRole: 'Frontend Developer',
    salary: 45000,
    startDate: '2023-01-10'
  },
  {
    id: 'EMP02',
    name: 'Priya Singh',
    designation: 'Employee',
    role: 'employee',
    itRole: 'UI/UX Designer',
    salary: 42000,
    startDate: '2023-02-05'
  },
  {
    id: 'EMP03',
    name: 'Rohit Meena',
    designation: 'Employee',
    role: 'employee',
    itRole: 'Backend Developer',
    salary: 48000,
    startDate: '2022-08-18'
  },
  {
    id: 'EMP04',
    name: 'Anjali Gupta',
    designation: 'Employee',
    role: 'employee',
    itRole: 'QA Engineer',
    salary: 40000,
    startDate: '2023-04-01'
  },
  {
    id: 'EMP05',
    name: 'Suresh Patel',
    designation: 'Employee',
    role: 'employee',
    itRole: 'Full Stack Developer',
    salary: 52000,
    startDate: '2022-06-12'
  }
];

const table = document.getElementById('employeeTable');

employees.forEach(emp => {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${emp.name}</td>
    <td>${emp.designation}</td>
    <td>
      <span class="badge ${emp.role}">
        ${emp.itRole}
      </span>
    </td>
    <td>₹ ${emp.salary.toLocaleString()}</td>
    <td>${emp.startDate}</td>
  `;


  tr.addEventListener('click', () => {
    
    localStorage.setItem('selectedProfile', JSON.stringify(emp));

    if (emp.role === 'employee') {
      window.location.href = 'employee-dashboard.html';
    } else if (emp.role === 'teamlead') {
      window.location.href = 'teamlead-dashboard.html';
    }
  });

  table.appendChild(tr);
});