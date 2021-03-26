import React, { useState, useRef, useEffect } from "react";

const EditableElement = (props) => {
    //the article on which i based:  https://javascript.plainenglish.io/editable-html-in-react-6dd67dd7e302
    const [text, setText] = useState('');
    const { onBlur, isContentEditable, key_name } = props;
    const element = useRef();
    let elements = React.Children.toArray(props.children); //It converts the props.children to an array.
    if (elements.length > 1) {
        throw Error("Can't have more than one child");
    }
    const handleKeyEvent = () => {
        const value = element.current?.value || element.current?.innerText;

        setText(value);
    };
    const handleBlur = () => {
        console.log('blur!!!');
        onBlur(key_name, text);
        // remove highlight class prop
    }
    const handleFocus = () => {
        console.log('Focus!!!!');
        // add highlight class prop
    }
    useEffect(() => {
        const value = element.current?.value || element.current?.innerText;
        setText(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    elements = React.cloneElement(elements[0], { //It allows edit the props of the children 
        contentEditable: isContentEditable,
        suppressContentEditableWarning: true,
        ref: element,
        onKeyUp: handleKeyEvent,
        onBlur: handleBlur,
        onFocus: handleFocus,
    });
    return elements;
};

export default EditableElement;
