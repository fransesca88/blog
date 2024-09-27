/* eslint-disable tailwindcss/no-custom-classname */

import DashboardSidebar from "./_components/Sidebar";
import "./dashboard.css";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-full flex-row ">
      <DashboardSidebar />
      <main className="m-0 h-auto w-full grow rounded-lg border-2 border-solid border-gray-500/10 bg-white px-[2.9375rem] py-[2.375rem] shadow-sm lg:m-5 lg:ml-0 xl:overflow-y-scroll ">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
