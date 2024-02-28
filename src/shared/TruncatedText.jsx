import React, { useState, useEffect } from 'react';

const TruncatedText = ({ text, wordCount }) => {
    const [truncatedText, setTruncatedText] = useState('');

    useEffect(() => {
        const words = text.split(' ');
        const truncated = words.slice(0, wordCount).join(' ');
        setTruncatedText(truncated);
    }, [text, wordCount]);

    return <p className='text-sm my-2'>{truncatedText}</p>;
};

export default TruncatedText;