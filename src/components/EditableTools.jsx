import React, { useContext } from "react";
import { Context } from "../context/Context";
export const EditableTools = () => {
  const {
    state: {
      initialState: { isContentEditable },
    },
    cancelEditContent,
    saveTextContentToLS,
  } = useContext(Context);
  if (isContentEditable)
    return (
      <div className="tools">
        <button
          className="tools__button tools__button--save"
          onClick={saveTextContentToLS}
        >
          Save
        </button>
        <button
          className="tools__button tools__button--cancel"
          onClick={cancelEditContent}
        >
          Cancel
        </button>
      </div>
    );
  return <></>;
};
