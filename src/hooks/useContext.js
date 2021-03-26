import { useEffect, useState } from 'react';
import initialState from '../context/initialState.json';
import txtTags from '../context/txtTags.json';
export const useContext = () => {
    const [state, setState] = useState({});

    useEffect(() => {
        const content = JSON.parse(window.localStorage.getItem('txtTags'));
        if (content) {
            setState({
                initialState,
                tagContent: content
            })
        } else {
            setState({
                initialState,
                tagContent: txtTags
            })
        }
    }, [])

    const setTextContent = (key_name, value) => {
        const arr_name = key_name.split('.', 2);
        const component_name = arr_name[0].toString();
        const k_name = arr_name[1].toString();

        const tagContent = { ...state.tagContent };
        const component = { ...tagContent[component_name] };
        component[k_name] = value;
        tagContent[component_name] = component;
        setState({
            ...state,
            tagContent
        });
        window.localStorage.setItem('txtTags', JSON.stringify(tagContent));
    }
    const activeContentEditable = () => {
        const initialState = { ...state.initialState, }
        initialState.isContentEditable = true;
        setState({
            ...state,
            initialState
        })
    };

    const cancelEditContent = () => {
        const initialState = { ...state.initialState, }
        initialState.isContentEditable = false;
        setState({
            ...state,
            initialState
        })
    };

    return { setTextContent, cancelEditContent, activeContentEditable, state };
}