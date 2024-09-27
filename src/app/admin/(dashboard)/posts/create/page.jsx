"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import PageTitle from "../../_components/PageTitle";

const Editor = dynamic(() => import("../../_components/Editor"), {
  ssr: false,
});

const AdminCreatePost = () => {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
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

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

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
          <div className="w-full" ref={editorRef}>
            {isLayoutReady ? (
              <Editor
                onChange={(event, editor) =>
                  setData((prev) => ({ ...prev, content: editor.getData() }))
                }
              />
            ) : (
              <p>Loading the Editor...</p>
            )}
          </div>
        </div>
        <div className="flex w-full justify-end">
          <button className="button-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AdminCreatePost;
