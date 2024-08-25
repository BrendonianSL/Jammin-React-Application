import React, { useState, useEffect } from "react";
import InputPresentational from "./InputPresentational";
import SearchTracks from "./SearchTracks";

export default function InputContainer({ authToken, setSongResults }) {
    const [currentInput, setCurrentInput] = useState('');

    // Handles Input Change and Updates State Immediately
    function handleInputChange({ target }) {
        const userInput = target.value;
        setCurrentInput(userInput); // Update input state immediately
    }

    // Perform the search when currentInput changes
    useEffect(() => {
        const fetchResults = async () => {
            if (currentInput) {
                const searchResults = await SearchTracks(authToken, currentInput);
                setSongResults(searchResults);
            } else {
                setSongResults([]); // Clear results if input is empty
            }
        };

        fetchResults();
    }, [currentInput, setSongResults]); // Re-run when currentInput or setResults changes

    return <InputPresentational input={currentInput} handleChange={handleInputChange} />;
}
