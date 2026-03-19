import { useState } from "react";

function Instructions({ propSetInstructions }) {
    
    const [value, setValue] = useState('');

    const handleChange = ({ target }) => {
        const { value } = target;
        setValue(value);
        propSetInstructions(value);
    }
    return (
        <textarea data-testid="textaria"
            placeholder="Blue ball jumping"
            onChange={ (event) => handleChange(event) }
            value={ value }
            rows={ 3 }
        ></textarea>
    )
}

export default Instructions;