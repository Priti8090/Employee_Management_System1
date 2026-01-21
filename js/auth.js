if (!localStorage.getItem('users')) {
  const users = [
    { name: 'Admin', email: 'admin@ems.com', password: 'admin123', role: 'admin' },
    { name: 'Lead One', email: 'lead1@ems.com', password: 'lead123', role: 'teamlead' },
    { name: 'Lead Two', email: 'lead2@ems.com', password: 'lead123', role: 'teamlead' },
    { name: 'Emp One', email: 'emp1@ems.com', password: 'emp123', role: 'employee' },
    { name: 'Emp Two', email: 'emp2@ems.com', password: 'emp123', role: 'employee' },
    { name: 'Emp Three', email: 'emp3@ems.com', password: 'emp123', role: 'employee' },
    { name: 'Emp Four', email: 'emp4@ems.com', password: 'emp123', role: 'employee' },
    { name: 'Emp Five', email: 'emp5@ems.com', password: 'emp123', role: 'employee' }
  ];
  localStorage.setItem('users', JSON.stringify(users));
}


const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('loginRole').value;

    const users = JSON.parse(localStorage.getItem('users'));

    const user = users.find(
      u => u.email === email && u.password === password && u.role === role
    );

    if (!user) {
      alert('Invalid credentials or role mismatch');
      return;
    }

    localStorage.setItem('loggedInUser', JSON.stringify(user));

    if (role === 'admin') {
      window.location.href = 'admin-dashboard.html';
    } else if (role === 'teamlead') {
      window.location.href = 'teamlead-dashboard.html';
    } else if (role === 'employee') {
      window.location.href = 'employee-dashboard.html';
    }
  });
}


const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));

    const newUser = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      role: document.getElementById('role').value
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful!');
    window.location.href = 'index.html';
  });
}