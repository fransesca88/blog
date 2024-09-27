"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import PageTitle from "../_components/PageTitle";

const DashboardDataTable = dynamic(() => import("../_components/DataTable"), {
  ssr: false,
});

const Users = () => {
  const columns = [
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Role",
      selector: (row) => row.role,
    },
  ];

  const data = [
    {
      username: "johndoe92",
      email: "johndoe92@example.com",
      role: "admin",
    },
    {
      username: "janesmith84",
      email: "janesmith84@example.com",
      role: "editor",
    },
    {
      username: "alexjohnson77",
      email: "alexjohnson77@example.com",
      role: "viewer",
    },
    {
      username: "sarahbrown68",
      email: "sarahbrown68@example.com",
      role: "moderator",
    },
    {
      username: "mikelee55",
      email: "mikelee55@example.com",
      role: "admin",
    },
    {
      username: "emilyclark99",
      email: "emilyclark99@example.com",
      role: "editor",
    },
    {
      username: "danielwong23",
      email: "danielwong23@example.com",
      role: "viewer",
    },
    {
      username: "oliviawhite45",
      email: "oliviawhite45@example.com",
      role: "moderator",
    },
    {
      username: "ryansmith34",
      email: "ryansmith34@example.com",
      role: "admin",
    },
    {
      username: "laurajones56",
      email: "laurajones56@example.com",
      role: "editor",
    },
  ];

  return (
    <>
      <PageTitle
        title="Users"
        description="Manager users who registered in this web"
      />
      <section id="content">
        <header className="mb-5">
          <Link className="button-primary" href="users/create">
            Add New User
          </Link>
        </header>
        <div className="content">
          <DashboardDataTable columns={columns} data={data} pagination />
        </div>
      </section>
    </>
  );
};

export default Users;
