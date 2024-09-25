/* eslint-disable tailwindcss/no-custom-classname */
import { Eye, MessageCircle, StickyNote, Users } from "lucide-react";
import PageTitle from "./_components/PageTitle";
import StatCard from "./_components/StatCard";

const AdminDashboard = () => {
  const cards = [
    {
      title: "Total Posts",
      icon: <StickyNote size={16} />,
      count: 10,
    },
    {
      title: "Total Comments",
      icon: <MessageCircle size={16} />,
      count: 100,
    },
    {
      title: "Page Views",
      icon: <Eye size={16} />,
      count: 1000,
    },
    {
      title: "Users",
      icon: <Users size={16} />,
      count: 20,
    },
  ];

  return (
    <>
      <PageTitle
        title="Greetings, Name Here!"
        description="Some quick information about the blog here."
      />
      <section id="stats">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <StatCard
              key={card.title}
              title={card.title}
              icon={card.icon}
              count={card.count}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
