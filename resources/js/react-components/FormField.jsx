import React, { useState, useEffect } from 'react';

function FormField(props) {
    const [value, setValue] = useState(parseInt(props.initialValue));

    //Every times the value change, update the parent Vue component
    useEffect(() => {
        props.updateFieldValue(value);
    }, [value])

    return <React.Fragment>
        <input type="text" disabled value={value} className="form-control form-input form-input-bordered" />
        <a className="btn btn-default cursor-pointer ml-4 bg-primary text-white" onClick={() => setValue(value + 1) }>+ 1</a>
        <a className="btn btn-link dim cursor-pointer ml-4 text-80" onClick={() => setValue(0) } >Reset Counter</a>
    </React.Fragment>
}

export default FormField;
