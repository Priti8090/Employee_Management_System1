const user = JSON.parse(localStorage.getItem('loggedInUser'));
if (!user || user.role !== 'employee') {
  alert('Unauthorized');
  window.location.href = 'index.html';
}

const today = new Date().toISOString().split('T')[0];
const key = `attendance_${user.email}`;
let attendance = JSON.parse(localStorage.getItem(key)) || {};

const inBtn = document.getElementById('inBtn');
const outBtn = document.getElementById('outBtn');
const msg = document.getElementById('msg');

if (attendance[today]?.inTime) {
  inBtn.disabled = true;
  const diff = (Date.now() - attendance[today].inTime) / (1000 * 60 * 60);
  if (diff >= 6) outBtn.disabled = false;
}

inBtn.onclick = () => {
  attendance[today] = { inTime: Date.now(), outTime: null };
  localStorage.setItem(key, JSON.stringify(attendance));
 document.getElementById('popup').style.display='flex';
  inBtn.disabled = true;

  setTimeout(() => {
    outBtn.disabled = false;
  }, 6 * 60 * 60 * 1000);
};

function closePopup(){
     document.getElementById('popup').style.display='none';
}

outBtn.onclick = () => {
  attendance[today].outTime = Date.now();
  localStorage.setItem(key, JSON.stringify(attendance));
  msg.innerText = 'Your OUT time attendance marked successfully.';
  outBtn.disabled = true;
};

function checkDateAttendance() {
  const date = document.getElementById('datePicker').value;
  const inStatus = document.getElementById('inStatus');
  const outStatus = document.getElementById('outStatus');

  if (!attendance[date]) {
    inStatus.innerText = 'IN Time: Absent ❌';
    outStatus.innerText = 'OUT Time: Absent ❌';
    return;
  }

  inStatus.innerText = attendance[date].inTime
    ? 'IN Time: Present ✅'
    : 'IN Time: Absent ❌';

  outStatus.innerText = attendance[date].outTime
    ? 'OUT Time: Present ✅'
    : 'OUT Time: Absent ❌';
}


const days = Object.keys(attendance).length;
let present = 0;
Object.values(attendance).forEach(a => {
  if (a.inTime && a.outTime) present++;
});

new Chart(document.getElementById('monthlyChart'), {
  type: 'bar',
  data: {
    labels: ['Present Days', 'Absent Days'],
    datasets: [{ data: [present, 30 - present] }]
  },
  options: { responsive: true }
});