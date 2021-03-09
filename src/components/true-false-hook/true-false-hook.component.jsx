import React, { useState } from 'react';

export const TrueFalseHook = () => {
    const [clicked, setClicked] = useState(false);

    const flipClicked = (status) => {
        setClicked(!status)
    };
    return { clicked, flipClicked };
};