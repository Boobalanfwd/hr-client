import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar />
        <div className="lg:ml-64">
          <Header />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employee />} />
              <Route path="/employee/add" element={<EmployeeForm />} />
              <Route path="/employee/:id" element={<EmployeeForm />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
