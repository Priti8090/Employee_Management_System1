const loggedUser = JSON.parse(localStorage.getItem('loggedInUser'));
let leaves = JSON.parse(localStorage.getItem('leaves')) || [];
const table = document.getElementById('leaveTable');

function loadLeaves() {
  table.innerHTML = '';

  const pendingLeaves = leaves.filter(
    l => l.teamLeadStatus === 'approved' && l.adminStatus === 'pending'
  );

  pendingLeaves.forEach(l => {
    table.innerHTML += `
      <tr>
        <td>${l.empName}</td>
        <td>${l.empId}</td>
        <td>${l.startDate} → ${l.endDate}</td>
        <td>${l.reason}</td>
        <td>
          <button class="action-btn approve" onclick="approve(${l.leaveId})">Approve</button>
          <button class="action-btn reject" onclick="reject(${l.leaveId})">Reject</button>
        </td>
      </tr>
    `;
  });
}

function approve(id) {
  leaves = leaves.map(l =>
    l.leaveId === id ? { ...l, adminStatus: 'approved' } : l
  );
  localStorage.setItem('leaves', JSON.stringify(leaves));
  loadLeaves();
}

function reject(id) {
  leaves = leaves.map(l =>
    l.leaveId === id ? { ...l, adminStatus: 'rejected' } : l
  );
  localStorage.setItem('leaves', JSON.stringify(leaves));
  loadLeaves();
}

loadLeaves();