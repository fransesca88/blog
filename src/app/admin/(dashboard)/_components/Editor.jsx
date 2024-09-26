"use client";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Alignment,
  BlockQuote,
  Bold,
  ClassicEditor,
  Code,
  CodeBlock,
  Essentials,
  FontBackgroundColor,
  FontColor,
  FontSize,
  Heading,
  ImageInsert,
  ImageInsertUI,
  ImageUpload,
  Indent,
  Italic,
  Link,
  List,
  Mention,
  Paragraph,
  Strikethrough,
  Subscript,
  Superscript,
  Undo,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";

const Editor = (props) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar: {
          items: [
            "undo",
            "redo",
            "|",
            "heading",
            "|",
            "fontsize",
            "fontColor",
            "fontBackgroundColor",
            "|",
            "bold",
            "italic",
            "strikethrough",
            "subscript",
            "superscript",
            "code",
            "|",
            "link",
            "uploadImage",
            "blockQuote",
            "codeBlock",
            "|",
            "alignment",
            "|",
            "bulletedList",
            "numberedList",
            "outdent",
            "indent",
          ],
        },
        plugins: [
          Bold,
          Essentials,
          Italic,
          Mention,
          Paragraph,
          Undo,
          Heading,
          Link,
          ImageUpload,
          List,
          Alignment,
          Indent,
          FontSize,
          FontColor,
          FontBackgroundColor,
          Strikethrough,
          Subscript,
          Superscript,
          Code,
          CodeBlock,
          Alignment,
          ImageInsertUI,
          ImageInsert,
          BlockQuote,
        ],
      }}
      {...props}
    />
  );
};

export default Editor;
