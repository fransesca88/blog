"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import PageTitle from "../../_components/PageTitle";
import "./categories.css";

const DashboardDataTable = dynamic(
  () => import("../../_components/DataTable"),
  {
    ssr: false,
  },
);

const Categories = () => {
  const [data, setData] = useState({
    title: "",
    slug: "",
  });

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Slug",
      selector: (row) => row.slug,
      sortable: true,
    },
  ];

  const tableData = [
    {
      title: "Cybersecurity",
      slug: "cybersecurity",
    },
    {
      title: "Cloud Computing",
      slug: "cloud-computing",
    },
    {
      title: "Web Development",
      slug: "web-development",
    },
    {
      title: "Mobile Apps",
      slug: "mobile-apps",
    },
    {
      title: "Internet of Things",
      slug: "internet-of-things",
    },
    {
      title: "Virtual Reality",
      slug: "virtual-reality",
    },
    {
      title: "Machine Learning",
      slug: "machine-learning",
    },
    {
      title: "Gadgets and Reviews",
      slug: "gadgets-and-reviews",
    },
    {
      title: "Software Development",
      slug: "software-development",
    },
    {
      title: "Data Science",
      slug: "data-science",
    },
  ];

  const paginationComponentOptions = {
    noRowsPerPage: true,
  };

  const inputOnChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (data.slug === "") {
      let parsedData = {
        ...data,
        slug: data.title.toLowerCase().split(" ").join("-"),
      };

      console.log("hihi => ", parsedData);
    } else {
      console.log("hehe => ", data);
    }
  };

  return (
    <>
      <PageTitle title="Categories" description="Manage Post Category here" />
      <section
        id="content"
        className="flex flex-col items-start gap-2 lg:flex-row"
      >
        <section
          id="add-category"
          className="w-full rounded-md border-2 border-solid border-gray-200 p-5"
        >
          <header className="mb-4">
            <h3>Add New Category</h3>
          </header>

          <form onSubmit={formSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={inputOnChange}
              />
            </div>
            <div className="form-group">
              <label>Slug</label>
              <input
                type="text"
                name="slug"
                id="slug"
                onChange={inputOnChange}
              />
            </div>
            <button className="button-primary" type="submit">
              Add New Category
            </button>
          </form>
        </section>
        <section
          id="categories"
          className="w-full grow rounded-md border-2 border-solid border-gray-200 p-5"
        >
          <header>
            <h3>Categories</h3>
          </header>
          <DashboardDataTable
            columns={columns}
            data={tableData}
            pagination
            paginationComponentOptions={paginationComponentOptions}
          />
        </section>
      </section>
    </>
  );
};

export default Categories;
