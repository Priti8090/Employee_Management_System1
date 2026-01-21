const loggedUser = JSON.parse(localStorage.getItem('loggedInUser'));
const leaveForm = document.getElementById('leaveForm');
const leaveHistory = document.getElementById('leaveHistory');

document.getElementById('empInfo').innerText =
  `${loggedUser.name} | ID: ${loggedUser.id}`;

document.getElementById('empName').value = loggedUser.name;
document.getElementById('empId').value = loggedUser.id;

let leaves = JSON.parse(localStorage.getItem('leaves')) || [];


leaveForm.addEventListener('submit', e => {
  e.preventDefault();

  const leave = {
    leaveId: Date.now(),
    empId: loggedUser.id,
    empName: loggedUser.name,
    team: loggedUser.team,
    startDate: startDate.value,
    endDate: endDate.value,
    reason: reason.value,
    teamLeadStatus: 'pending',
    adminStatus: 'pending'
  };

  leaves.push(leave);
  localStorage.setItem('leaves', JSON.stringify(leaves));

  leaveForm.reset();
  loadLeaveHistory();
});


function loadLeaveHistory() {
  leaveHistory.innerHTML = '';

  const myLeaves = leaves.filter(l => l.empId === loggedUser.id);

  myLeaves.forEach(l => {
    const days =
      (new Date(l.endDate) - new Date(l.startDate)) / (1000 * 3600 * 24) + 1;

    let finalStatus = 'Pending';
    let statusClass = 'status-pending';

    if (l.teamLeadStatus === 'rejected') {
      finalStatus = 'Dismissed';
      statusClass = 'status-dismissed';
    } else if (l.teamLeadStatus === 'approved' && l.adminStatus === 'approved') {
      finalStatus = 'Leave Granted';
      statusClass = 'status-granted';
    } else if (l.adminStatus === 'rejected') {
      finalStatus = 'Rejected';
      statusClass = 'status-rejected';
    }

    const approver =
      `TL: ${l.teamLeadStatus} | Admin: ${l.adminStatus}`;

    const canCancel =
      l.teamLeadStatus === 'pending' && l.adminStatus === 'pending';

    leaveHistory.innerHTML += `
      <tr>
        <td>${l.startDate} → ${l.endDate}</td>
        <td>${days}</td>
        <td class="${statusClass}">${finalStatus}</td>
        <td>${approver}</td>
        <td>
          <button class="cancel-btn"
            ${!canCancel ? 'disabled' : ''}
            onclick="cancelLeave(${l.leaveId})">
            Cancel
          </button>
        </td>
      </tr>
    `;
  });
}

function cancelLeave(id) {
  leaves = leaves.filter(l => l.leaveId !== id);
  localStorage.setItem('leaves', JSON.stringify(leaves));
  loadLeaveHistory();
}

loadLeaveHistory();