import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/general/Landing/landing";
import Login from "./Pages/general/auth/login";
import EmployeeHome from "./Pages/employee/home/home";
import EmployeeMoney from "./Pages/employee/money/money";
import Signup from "./Pages/general/auth/signup";
import ClientSignup from "./Pages/client/signup/signup";
import ClientHome from "./Pages/client/home/home";
import ClientMoney from "./Pages/client/money/money";
import ClientEmployee from "./Pages/client/employee/employee";
import ClientProfile from "./Pages/client/profile/profile";
import Messages from "./Pages/client/notifications/message";
import Notifications from "./Pages/client/notifications/notifs";
import EmployeeSchedule from "./Pages/employee/schedule/EmployeeSchedule";
import EmployeeEditProfile from "./Pages/employee/EmployeeEditProfile/EmployeeEditProfile";
import DepartmentHome from "./Pages/department/home/home";
import DepartmentMembers from "./Pages/department/members/members";
import { MemberDetail } from "./Pages/department/members/detail";
import DepartmentApps from "./Pages/department/apps/app";
import DepartmentProfile from "./Pages/department/profile/profile";

import ClientApprovals from "./Pages/client/ClientApprovals/ClientApprovals";

import DepartmentPay from "./Pages/client/signup/department";
import EmployerHome from "./Pages/Employer/Home/home";
import EmployerApps from "./Pages/Employer/Apps/apps";
import EmployerEmployees from "./Pages/Employer/Employees/employees";
import EmployerMoney from "./Pages/Employer/Money/money";
import EmployerDept from "./Pages/Employer/Money/dept";
import EmployerProfile from "./Pages/Employer/Profile/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/admin">
          <Route path="home" />
        </Route>

        <Route path="/client">
          <Route path="home" element={<ClientHome />} />
          <Route path="signup" element={<ClientSignup />} />
          <Route path="signup/:id" element={<DepartmentPay />} />
          <Route path="money" element={<ClientMoney />} />
          <Route path="employee" element={<ClientEmployee />} />
          <Route path="profile" element={<ClientProfile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="approvals" element={<ClientApprovals />} />
        </Route>

        <Route path="/department">
          <Route path="apps" element={<DepartmentApps />} />
          <Route path="home" element={<DepartmentHome />} />
          <Route path="members" element={<DepartmentMembers />} />
          <Route path="profile" element={<DepartmentProfile />} />
          <Route path="members/:userId" element={<MemberDetail />} />
        </Route>

        <Route path="/supervisor">
          <Route path="home" />
        </Route>

        <Route path="/employee">
          <Route path="home" element={<EmployeeHome />} />
          <Route path="money" element={<EmployeeMoney />} />
          <Route path="schedule" element={<EmployeeSchedule />} />
          <Route path="profile" element={<EmployeeEditProfile />} />
        </Route>

        <Route path="employer">
          <Route path="home" element={<EmployerHome />} />
          <Route path="apps" element={<EmployerApps />} />
          <Route path="employees" element={<EmployerEmployees />} />
          <Route path="money" element={<EmployerMoney />} />
          <Route path="profile" element={<EmployerProfile />} />
          <Route path="money/department/:id" element={<EmployerDept />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
