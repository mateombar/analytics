import React, { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import './styles/EditableTools.css';
export const EditableTools = () => {
  const [animation, setAnimation] = useState('tools slideInDown');
  const {
    state: {
      initialState: { isContentEditable },
    },
    cancelEditContent,
    saveTextContentToLS,
  } = useContext(Context);
  useEffect(() => {
    setAnimation('tools slideInDown');
  }, [isContentEditable])

  const handleClick = async (action = false) => {
    await setAnimation('tools slideOutUp')
    switch (action) {
      case true:
        saveTextContentToLS();
        break;
      default:
        cancelEditContent();
        break;
    }
  }

  if (isContentEditable)
    return (
      <div className={animation}>
        <button
          className="tools__button tools__button--save"
          onClick={() => handleClick(true)}
        >
          Save
        </button>
        <button
          className="tools__button tools__button--cancel"
          onClick={() => handleClick()}
        >
          Cancel
        </button>
      </div>
    );
  return <></>;
};
