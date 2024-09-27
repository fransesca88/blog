"use client";
import dynamic from "next/dynamic";
import PageTitle from "../_components/PageTitle";

const DashboardDataTable = dynamic(() => import("../_components/DataTable"), {
  ssr: false,
});

const Comments = () => {
  const columns = [
    {
      name: "Author",
      selector: (row) => row.author,
    },
    {
      name: "Comment",
      selector: (row) => row.comment,
    },
    {
      name: "In Post",
      selector: (row) => row.inpost,
    },
  ];

  const data = [
    {
      author: "AliceW",
      comment: "Great insights on this topic!",
      inpost: "Understanding the Benefits of Meditation",
    },
    {
      author: "BobR",
      comment: "I completely agree with your points.",
      inpost: "The Future of Renewable Energy",
    },
    {
      author: "CharlieJ",
      comment: "This was very informative, thanks!",
      inpost: "Top 10 Healthy Eating Tips",
    },
    {
      author: "DanaS",
      comment: "I’d love to see more articles like this.",
      inpost: "The Importance of Work-Life Balance",
    },
    {
      author: "EveL",
      comment:
        "Interesting perspective! What do you think about outdoor activities?",
      inpost: "Benefits of Hiking for Health",
    },
    {
      author: "FrankM",
      comment: "This is a game-changer for many people.",
      inpost: "How to Save Money While Traveling",
    },
    {
      author: "GraceT",
      comment: "Could you provide more examples of effective communication?",
      inpost: "Improving Your Public Speaking Skills",
    },
    {
      author: "HankP",
      comment: "I disagree with some of your conclusions.",
      inpost: "Exploring Different Learning Styles",
    },
    {
      author: "IvyC",
      comment: "Fantastic read! I learned a lot about gardening.",
      inpost: "Starting Your Own Vegetable Garden",
    },
    {
      author: "JackD",
      comment: "What a well-researched article!",
      inpost: "Understanding Mental Health",
    },
  ];

  return (
    <>
      <PageTitle
        title="Comments"
        description="Moderate & manage comments here"
      />
      <section id="content">
        <DashboardDataTable columns={columns} data={data} />
      </section>
    </>
  );
};

export default Comments;
