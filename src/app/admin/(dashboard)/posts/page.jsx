"use client";

import PageTitle from "../_components/PageTitle";
import dynamic from "next/dynamic";

const DashboardDataTable = dynamic(() => import("../_components/DataTable"), {
  ssr: false,
});

const AdminPosts = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Categories",
      selector: (row) => row.categories,
      sortable: true,
    },

    {
      name: "Author",
      selector: (row) => row.author,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Ancaman Keamanan Siber Meningkat di 2024",
      categories: "Cybersecurity, Technology",
      author: "Nata",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Komputasi Awan: Masa Depan Penyimpanan Data",
      categories: "Cloud Computing, IT",
      author: "Nata",
      date: "2024-02-20",
    },
    {
      id: 3,
      title: "Jaringan 5G: Apa yang Perlu Anda Ketahui",
      categories: "Telecommunications, Technology",
      author: "Nata",
      date: "2024-03-05",
    },
    {
      id: 4,
      title: "Kenaikan Komputasi Edge",
      categories: "Edge Computing, IT",
      author: "Nata",
      date: "2024-05-18",
    },
    {
      id: 5,
      title: "Praktik Terbaik untuk Keamanan Kerja Jarak Jauh",
      categories: "Cybersecurity, IT",
      author: "Nata",
      date: "2024-06-22",
    },
    {
      id: 6,
      title: "Regulasi Keamanan Siber: Apa yang Harus Diharapkan di 2024",
      categories: "Cybersecurity, Law",
      author: "Nata",
      date: "2024-07-30",
    },
    {
      id: 7,
      title: "Perusahaan Teknologi Menginvestasikan Energi Terbarukan",
      categories: "Sustainability, Technology",
      author: "Nata",
      date: "2024-08-14",
    },
    {
      id: 8,
      title: "Tren Pengembangan Aplikasi Mobile",
      categories: "Mobile Development, Technology",
      author: "Nata",
      date: "2024-09-01",
    },
    {
      id: 9,
      title: "Pentingnya Solusi Cadangan Data",
      categories: "Data Management, IT",
      author: "Nata",
      date: "2024-09-25",
    },
    {
      id: 10,
      title: "Tren Alat Keamanan Siber yang Muncul",
      categories: "Cybersecurity, Technology",
      author: "Nata",
      date: "2024-10-12",
    },
    {
      id: 11,
      title: "Memahami DevOps: Budaya dan Praktik",
      categories: "DevOps, IT",
      author: "Nata",
      date: "2024-11-02",
    },
    {
      id: 12,
      title: "Dampak Algoritma Media Sosial",
      categories: "Social Media, Technology",
      author: "Nata",
      date: "2024-11-20",
    },
    {
      id: 13,
      title: "Persiapan untuk Karir di TI",
      categories: "Education, IT Careers",
      author: "Nata",
      date: "2024-12-05",
    },
    {
      id: 14,
      title: "Privasi Data: Apa yang Perlu Anda Ketahui",
      categories: "Privacy, IT",
      author: "Nata",
      date: "2024-12-18",
    },
    {
      id: 15,
      title: "Masa Depan Infrastruktur TI",
      categories: "Infrastructure, Technology",
      author: "Nata",
      date: "2025-01-10",
    },
    {
      id: 16,
      title: "Menavigasi Tantangan Keamanan Awan",
      categories: "Cloud Security, IT",
      author: "Nata",
      date: "2025-01-25",
    },
    {
      id: 17,
      title: "Pentingnya Kepatuhan TI",
      categories: "Compliance, Technology",
      author: "Nata",
      date: "2025-02-15",
    },
    {
      id: 18,
      title: "Peran TI dalam Transformasi Digital",
      categories: "Digital Transformation, IT",
      author: "Nata",
      date: "2025-03-05",
    },
    {
      id: 19,
      title: "Memahami Keamanan Internet of Things (IoT)",
      categories: "IoT, Cybersecurity",
      author: "Nata",
      date: "2025-03-20",
    },
    {
      id: 20,
      title: "Tren Terbaru dalam Teknologi Informasi",
      categories: "IT Trends, Technology",
      author: "Nata",
      date: "2025-04-01",
    },
  ];

  return (
    <>
      <PageTitle title="Posts" description="List of your amazing blog posts" />
      <section id="post-data">
        <DashboardDataTable columns={columns} data={data} pagination />
      </section>
    </>
  );
};

export default AdminPosts;
