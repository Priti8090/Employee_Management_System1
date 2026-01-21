const loggedUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedUser || loggedUser.role !== 'teamlead') {
  alert('Unauthorized Access');
  window.location.href = 'index.html';
}

const teamsData = {
  "lead1@ems.com": {
    name: 'Team 01',
    members: [
      { id: 1, name: 'Emp 1', attendance: 80 },
      { id: 2, name: 'Emp 2', attendance: 72 }
    ],
    leaveRequests: 2
  },
  "lead2@ems.com": {
    name: 'Team 02',
    members: [
      { id: 3, name: 'Emp 3', attendance: 65 },
      { id: 4, name: 'Emp 4', attendance: 70 },
      { id: 5, name: 'Emp 5', attendance: 58 }
    ],
    leaveRequests: 3
  }
};

const team = teamsData[loggedUser.email];

if (!team) {
  alert('Team not assigned');
}

function goToLeaves() {
  window.location.href = 'teamlead-pending-leaves.html';
}

document.getElementById('welcomeText').innerText = `Welcome to ${team.name} Dashboard`;


document.getElementById('leaveCount').innerText = team.leaveRequests;


const memberList = document.getElementById('memberList');
memberList.innerHTML = '';

team.members.forEach(member => {
  const li = document.createElement('li');
  li.textContent = member.name;
  li.onclick = () => {
    window.location.href = `employee-dashboard.html?empId=${member.id}`;
  };
  memberList.appendChild(li);
});


const ctx = document.getElementById('teamAttendanceChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: team.members.map(m => m.name),
    datasets: [{
      label: 'Attendance %',
      data: team.members.map(m => m.attendance)
    }]
  },
  options: {
    responsive: true,
    onClick: (evt, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const empId = team.members[index].id;
        window.location.href = `employee-dashboard.html?empId=${empId}`;
      }
    }
  }
});