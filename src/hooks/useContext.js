import {useEffect, useState} from 'react';

export const useContext = () =>{
    const [state, setState] = useState({});

    return {state};
}