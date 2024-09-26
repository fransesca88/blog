"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import PageTitle from "../../_components/PageTitle";

const Editor = dynamic(() => import("../../_components/Editor"), {
  ssr: false,
});

const AdminCreatePost = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const handleHTML = (content) => {
    return { __html: content };
  };

  const formSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <>
      <PageTitle
        title="Posts"
        description="Create your fckin awesome post here!"
      />
      <form onSubmit={formSubmit}>
        <div className="mb-4 flex flex-col items-start justify-start gap-2">
          <label>Post Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="w-full rounded-md"
            onChange={(e) =>
              setData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        <div className="mb-4 flex flex-col items-start justify-start gap-2">
          <label>Post Content</label>
          <div className="w-full">
            <Editor
              onChange={(event, editor) =>
                setData((prev) => ({ ...prev, content: editor.getData() }))
              }
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      {data.title !== "" && data.content !== "" ? (
        <div dangerouslySetInnerHTML={handleHTML(data.content)}></div>
      ) : (
        ""
      )}
    </>
  );
};

export default AdminCreatePost;
