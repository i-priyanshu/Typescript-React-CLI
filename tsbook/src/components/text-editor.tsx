import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

const TextEditor: React.FC = () => {
  const [editor, setEditor] = useState(false);

  useEffect(() => {
    const listener = () => {
      setEditor(false);
    };
    document.addEventListener("click", listener, { capture: true });

    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []);

  if (editor) {
    return (
      <div>
        <MDEditor />
      </div>
    );
  }

  return (
    <div onClick={() => setEditor(true)}>
      <MDEditor.Markdown source={"# Header"} />
    </div>
  );
};

export default TextEditor;
