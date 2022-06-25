import React, { useEffect, useState } from "react"

const Field = (props) => {

    let [name, setName] = useState(props.name)
    let [textField, setTextField] = useState(props.textField)

    useEffect(() => {
        setName(props.name);
        setTextField(props.textField) 
    }, [props.textField] ) 

    const onFieldChange = (e) => {
        props.onChange(e.target.value, props.Mykey);
    }

    return (
        <div>         
            <p>{name}</p>
            <textarea value={textField} onChange={onFieldChange} className="input" rows="1" />
        </div>
    );
}
export default Field;
