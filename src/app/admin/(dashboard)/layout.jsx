/* eslint-disable tailwindcss/no-custom-classname */

import DashboardSidebar from "./_components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-full flex-row ">
      <DashboardSidebar />
      <main className="m-5 h-auto w-full grow rounded-lg border-2 border-solid border-gray-500/10 bg-white px-[2.9375rem] py-[2.375rem] shadow-sm lg:ml-0">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
