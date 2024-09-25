/* eslint-disable tailwindcss/no-custom-classname */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ADMIN_PATH = "/admin";

const DashboardSidebar = () => {
  const [child, setChild] = useState(false);

  const pathname = usePathname();

  const navigations = [
    {
      label: "Dashboard",
      path: `${ADMIN_PATH}`,
      isParent: false,
      icon: null,
      children: [],
    },
    {
      label: "Posts",
      path: `${ADMIN_PATH}/posts`,
      isParent: true,
      icon: null,
      children: [
        {
          label: "Add New",
          path: `${ADMIN_PATH}/posts/create`,
        },
        {
          label: "Category",
          path: `${ADMIN_PATH}/post/category`,
        },
      ],
    },
    {
      label: "Comments",
      path: `${ADMIN_PATH}/comments`,
      isParent: false,
      icon: null,
      children: [],
    },
    {
      label: "Users",
      path: `${ADMIN_PATH}/users`,
      isParent: false,
      icon: null,
      children: [],
    },
  ];

  const toggleChild = () => {
    setChild(!child);
  };

  return (
    <aside className="m-5 hidden h-auto w-[18.75rem] rounded-lg border-2 border-solid border-gray-500/10 bg-white px-7 py-[2.375rem] shadow-sm lg:flex lg:flex-col lg:justify-between lg:gap-5">
      <header>
        <p className="text-2xl font-black">Nata&apos;s Blog</p>
      </header>
      <nav className="grow">
        <ul>
          {navigations.map((nav) =>
            nav.isParent && nav.children.length !== 0 ? (
              <li key={nav.label} className="mb-4">
                <div
                  className={`flex flex-row items-center justify-between ${pathname === nav.path ? "rounded-r-md bg-blue-50 pr-4" : ""}`}
                >
                  <Link
                    href={nav.path}
                    className={`${pathname === nav.path ? "active" : ""}`}
                  >
                    {nav.label}
                  </Link>

                  <button type="button" onClick={toggleChild}>
                    expand
                  </button>
                </div>

                <ul className={`${child ? "block" : "hidden"} ml-5 mt-2`}>
                  {nav.children.map((child) => (
                    <li key={child.label} className="mb-2">
                      <Link
                        href={child.path}
                        className={`${pathname === child.path ? "child-active" : ""}`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={nav.label} className="mb-4">
                <Link
                  href={nav.path}
                  className={`${pathname === nav.path ? "active" : ""}`}
                >
                  {nav.label}
                </Link>
              </li>
            ),
          )}
        </ul>
      </nav>
      <footer>
        <p>&copy; {new Date().getFullYear()} Nata</p>
      </footer>
    </aside>
  );
};

export default DashboardSidebar;
