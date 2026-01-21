const holidays = [
  { name: 'New Year', date: '01-01' },
  { name: 'Republic Day', date: '01-26' },
  { name: 'Independence Day', date: '08-15' },
  { name: 'Gandhi Jayanti', date: '10-02' },
  { name: 'Christmas', date: '12-25' }
];

const restrictedHolidays = [
  { name: 'Holi', date: '03-25' },
  { name: 'Diwali', date: '11-01' }
];

let markedHolidays = JSON.parse(localStorage.getItem('markedHolidays')) || [];

const holidayList = document.getElementById('holidayList');
const restrictedList = document.getElementById('restrictedList');
const calendar = document.getElementById('calendar');
const toggleBtn = document.getElementById('toggleCalendar');
const calendarSection = document.getElementById('calendarSection');
const monthPicker = document.getElementById('monthPicker');

function renderList(list, container) {
  container.innerHTML = '';
  list.forEach(h => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${h.name} (${h.date})
      <button class="mark-btn" onclick="markHoliday('${h.date}')">Mark</button>
    `;
    container.appendChild(li);
  });
}

renderList(holidays, holidayList);
renderList(restrictedHolidays, restrictedList);

function markHoliday(date) {
  if (!markedHolidays.includes(date)) {
    markedHolidays.push(date);
    localStorage.setItem('markedHolidays', JSON.stringify(markedHolidays));
    alert('Holiday marked on calendar');
    renderCalendar();
  }
}

toggleBtn.onclick = () => {
  calendarSection.classList.toggle('hidden');
};

function renderCalendar() {
  calendar.innerHTML = '';
  const [year, month] = monthPicker.value.split('-');
  const daysInMonth = new Date(year, month, 0).getDate();

  for (let d = 1; d <= daysInMonth; d++) {
    const dayDiv = document.createElement('div');
    const dateKey = `${month}-${String(d).padStart(2, '0')}`;
    dayDiv.className = 'day';

    if (markedHolidays.includes(dateKey)) {
      dayDiv.classList.add('holiday');
    }

    dayDiv.innerText = d;
    calendar.appendChild(dayDiv);
  }
}

monthPicker.addEventListener('change', renderCalendar);