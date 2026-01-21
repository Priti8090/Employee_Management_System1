#  Employee Management System (Role-Based HRMS)

A **fully functional, frontend-only Employee Management System** built using  
**HTML, CSS, JavaScript, and LocalStorage**.  
This project simulates a real-world **HRMS** with **Admin, Team Lead, and Employee** dashboards.

---

##  Demo Login Credentials (IMPORTANT)

Use the following credentials to explore different dashboards:

### Admin Login
| Username | Password | Role  |
|--------|----------|-------|
| admin  | admin123 | Admin |

➡ Redirects to **Admin Dashboard**

---

###  Team Lead Logins
| Username     | Password   | Team |
|-------------|------------|------|
| lead01      | lead123    | Team 01 |
| lead02      | lead123    | Team 02 |

➡ Redirects to **Team Lead Dashboard**

---

###  Employee Logins
| Username | Password | Employee |
|---------|----------|----------|
| emp01   | emp123   | Employee 1 |
| emp02   | emp123   | Employee 2 |
| emp03   | emp123   | Employee 3 |
| emp04   | emp123   | Employee 4 |
| emp05   | emp123   | Employee 5 |

➡ Redirects to **Employee Dashboard**

> Select the correct **role from the dropdown** on the login page before logging in.

---

##  Features Overview

###  Authentication
- Login & Signup pages
- Role-based access (Admin / Team Lead / Employee)
- Role dropdown during login
- Automatic dashboard redirection
- LocalStorage-based session handling

---

##  Admin Dashboard
- View all teams & employees
- Attendance summary (Bar Chart)
- Salary overview by team (Pie Chart)
- Pending leave requests
- Approve / Reject leave requests
- View total teams & employees
- Redirect to:
  - Team attendance
  - Salary details
  - Leave management
  - Employee profiles

---

##  Team Lead Dashboard
- Dynamic welcome message (Team 01 / Team 02)
- View team member attendance (Bar Chart)
- Redirect to individual employee dashboards
- View team leave requests
- Approve / Reject leave requests
- Team-based data rendering

---

##  Employee Dashboard
- Personalized dashboard (Employee name shown)
- Attendance summary (Pie Chart)
- Mark attendance:
  - In-time
  - Out-time (enabled after 6 hours)
- Date-wise attendance view
- Monthly attendance summary
- Leave balance & leave history
- Apply & cancel leave requests
- Salary summary (Bar Chart)
- Payslip-style salary view
- Holiday & calendar access

---

##  Attendance System
- In-time & Out-time attendance marking
- Authenticated button flow
- Success popup on marking attendance
- Date-wise attendance status
- Monthly attendance charts

---

##  Leave Management System
- Apply leave with dates & reason
- Leave approval by Team Lead & Admin
- Leave status:
  - Approved
  - Rejected
  - Dismissed
  - Granted
- Leave history with approver details
- Cancel pending leave requests

---

##  Salary Management
- Monthly salary breakdown
- Attendance-linked deduction logic
- Performance bonus calculation
- Payslip-style UI
- Light-themed modern design

---

##  Holiday & Calendar Dashboard
- IT sector holidays list
- Restricted holidays
- Calendar view
- Mark holidays on calendar
- Accessible from employee dashboard

---

##  Employee & Team List
- 5 Employees + 2 Team Leads
- Role, salary & joining date shown
- Click to open employee or team lead dashboard/profile

---

##  Technologies Used
- **HTML5**
- **CSS3** (Responsive UI)
- **JavaScript (ES6)**
- **LocalStorage**
- **Chart.js**

---

## 📁 Project Structure
