import { useState } from "react";

function Instructions() {
    const [value, setValue] = useState('');

    const handleChange = ({ target }) => {
        const { value } = target;
        setValue(value);
    }
    return (
        <textarea data-testid="textaria"
            placeholder="Blue ball jumping"
            onChange={ (event) => handleChange(event) }
            value={ value }
        ></textarea>
    )
}

export default Instructions;