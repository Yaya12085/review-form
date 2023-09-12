import React from "react";
import useStore from "../store";

const Textarea = () => {
  const { message, setMessage } = useStore();
  return (
    <textarea
      className={
        "flex min-h-[180px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      }
      placeholder=""
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  );
};

export default Textarea;
