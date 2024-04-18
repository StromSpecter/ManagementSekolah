import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  PiStudent,
  PiUsersThree,
  PiBookOpenText,
  PiHouseSimple,
  PiBuildings,
  PiCalendar,
  PiCheckSquareOffset,
  PiExam,
  PiMedal,
} from "react-icons/pi";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const Sidebar = () => {
  const location = useLocation();
  const [sidebarActive, setSidebarActive] = useState(false);

  const sidebarToggle = () => {
    setSidebarActive(!sidebarActive);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`flex flex-col ${sidebarActive ? 'w-20' : 'w-64'} h-screen bg-white transition-all duration-300`}>
      {/* Logo */}
      <div className="flex items-center justify-center h-32">
        <div className="w-14 h-14 bg-violet-500 rounded"></div>
      </div>
      <BsArrowLeftCircleFill
        className={`fixed text-2xl top-24 text-violet-500 transition-all duration-300 ${sidebarActive ? 'left-16' : 'left-60'} transform ${sidebarActive ? 'rotate-180' : ''}`}
        onClick={sidebarToggle}
      />
      {/* Links */}
      <div className="flex flex-col flex-grow px-4 gap-4">
        <Link
          to="/"
          className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 ${
            isActiveLink("/") && "text-violet-500 bg-violet-100"
          }`}
        >
          <PiHouseSimple />
          <p className={sidebarActive ? 'hidden' : ''}>Dashboard</p>
        </Link>
        <Link
          to="/students"
          className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 ${
            isActiveLink("/students") && "text-violet-500 bg-violet-100"
          }`}
        >
          <PiStudent />
          <p className={sidebarActive ? 'hidden' : ''}>Students</p>
        </Link>
        <Link
          to="/teachers"
          className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 ${
            isActiveLink("/teachers") && "text-violet-500 bg-violet-100"
          }`}
        >
          <PiUsersThree />
          <p className={sidebarActive ? 'hidden' : ''}>Teachers</p>
        </Link>
        <Link
          to="/class"
          className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 ${
            isActiveLink("/class") && "text-violet-500 bg-violet-100"
          }`}
        >
          <PiBuildings />
          <p className={sidebarActive ? 'hidden' : ''}>Class</p>
        </Link>
        <Link
          to="/subjects"
          className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 ${
            isActiveLink("/subjects") && "text-violet-500 bg-violet-100"
          }`}
        >
          <PiBookOpenText />
          <p className={sidebarActive ? 'hidden' : ''}>Subjects</p>
        </Link>
        <Link
          to="/routine"
          className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 ${
            isActiveLink("/routine") && "text-violet-500 bg-violet-100"
          }`}
        >
          <PiCalendar />
          <p className={sidebarActive ? 'hidden' : ''}>Routine</p>
        </Link>
        <Link
          to="/attendance"
          className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 ${
            isActiveLink("/attendance") && "text-violet-500 bg-violet-100"
          }`}
        >
          <PiCheckSquareOffset />
          <p className={sidebarActive ? 'hidden' : ''}>Attendance</p>
        </Link>
        <Link
          to="/exam"
          className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 ${
            isActiveLink("/exam") && "text-violet-500 bg-violet-100"
          }`}
        >
          <PiExam />
          <p className={sidebarActive ? 'hidden' : ''}>Exam</p>
        </Link>
        <Link
          to="/resault"
          className={`flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 ${
            isActiveLink("/resault") && "text-violet-500 bg-violet-100"
          }`}
        >
          <PiMedal />
          <p className={sidebarActive ? 'hidden' : ''}>Resault</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
