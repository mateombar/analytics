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

    const setActualTextContent = (key_name, value) => {
        const arr_name = key_name.split('.', 2);
        const component_name = arr_name[0].toString();
        const k_name = arr_name[1].toString();

        const actualTagContent = { ...state.actualTagContent };
        const component = { ...actualTagContent[component_name] };
        component[k_name] = value;
        actualTagContent[component_name] = component;
        setState({
            ...state,
            actualTagContent: actualTagContent,
        });
    }
    const saveTextContentToLS = () => {
        const initialState = { ...state.initialState, }
        initialState.isContentEditable = false;
        const tagContent = { ...state.actualTagContent };
        setState({
            ...state,
            tagContent,
            initialState
        });
        window.localStorage.setItem('txtTags', JSON.stringify(tagContent));
    }
    const activeContentEditable = () => {
        const tagContent = { ...state.tagContent };
        const initialState = { ...state.initialState, }
        initialState.isContentEditable = true;
        setState({
            ...state,
            initialState,
            actualTagContent: tagContent
        })
    };

    const cancelEditContent = async() => {
        const initialState = { ...state.initialState, }
        initialState.isContentEditable = false;
        const tagContent = { ...state.tagContent };
        const actualTagContent = {...state.actualTagContent};
        await setState({
            ...state,
            tagContent: {... actualTagContent},
        })
        await setState({
            ...state,
            initialState,
            tagContent: { ...tagContent },
            actualTagContent: { ...tagContent },
        })
    };

    return { setActualTextContent, cancelEditContent, activeContentEditable, saveTextContentToLS, state };
}